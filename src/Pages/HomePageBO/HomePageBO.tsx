import React, { useEffect, useState } from "react";
import axios from "axios";
import Aside from "../../app/Layout/Aside/aside";
import Header from "../../app/Layout/Header/header";
import "../HomePageBO/HomePageBO.css";
import { Cookies, useCookies } from "react-cookie";
import { User } from "../../Models/user";
import { Recipe } from "../../Models/recipe";

export default function HomePageBackOffice() {
  const [user, setUser] = useState<User>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeCategories, setRecipeCategories] = useState<string[]>([]); // Nouvel état pour stocker les noms des catégories
  const [cookies] = useCookies();
  const userCookie = cookies.User;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      axios
        .get<User>(
          `https://localhost:5041/api/User/GetUserById?userId=${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      axios
        .get<Recipe[]>(
          `https://localhost:5041/api/Recipe/GetRecipesByUserId?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((recipesResponse) => {
          setRecipes(recipesResponse.data);
        })
        .catch((recipesError) => {
          console.error(recipesError);
        });
    }
  }, []);


  return (
    <>
      <Header />
      <Aside />

      <article className="dashboard">
        {user && (
          <>
            <div className="content-profil">
              <h2 className="h2-welcome">
                Bienvenue {user.userName}, sur ton espace !
              </h2>
              <section className="edit-profil">
                <p>
                  <strong>Pseudo : </strong> {user.userName}
                </p>
                <p>
                  <strong>Email : </strong> {user.email}
                </p>
              </section>
              <section className="edit-recipe">
                <h3 className="h3-profil">
                  Mes recettes publiées ({recipes.length})
                </h3>
                <div className="profil">
                  {recipes.map((recipe, index) => (
                    <div key={index} className="profil">
                      <p className="p-profil">
                        <strong>Titre : </strong> {recipe.recipeTitle}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        )}
      </article>
    </>
  );
}
