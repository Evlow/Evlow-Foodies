import React, { useEffect, useState } from "react";
import axios from "axios";
import Aside from "../../app/Layout/Aside/aside";
import Header from "../../app/Layout/Header/header";
import '../HomePageBO/HomePageBO.css'
import { Cookies, useCookies } from "react-cookie";
import { User } from "../../Models/user";
import { Recipe } from "../../Models/recipe";



export default function HomePageBackOffice() {
  const [user, setUser] = useState<User>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [cookies,] = useCookies();
  const userCookie = cookies.User;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");


    if (token) {
      // Récupérer les informations de l'utilisateur
      axios
        .get<User>(
          `http://localhost:5041/api/User/GetUserAndRecipes?userId=${userId}`,
          {
            headers: {
               Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setUser(response.data);

          // Récupérer les recettes de l'utilisateur
          axios
            .get<Recipe[]>(
              `http://localhost:5041/api/Recipe/GetRecipesByUserId?userId=${userId}`,
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
              console.log(recipesError);
            });

          console.log(cookies.User);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <Header />
      <Aside />

      <div className="dashboard">
        {user && (
          <>
            <div className="content-profil">
              <h2 className="h2-welcome">Bienvenue {user.userName}, sur ton espace !</h2>
              <section className="edit-profil">
                <p><strong>Pseudo : </strong> {user.userName}</p>
                <p><strong>Email : </strong> {user.email}</p>
                {/* Other user information */}
              </section>

              <section className="edit-recipe">
                <h3 className="h3-profil">Mes recettes publiées ({recipes.length})</h3>
                <div className="profil">
                  {recipes.map((recipe, index) => (
                    <div key={index} className="profil">
                      <p className="p-profil"><strong>Titre : </strong> {recipe.recipeTitle}</p>
                      <p className="p-profil"><strong>Catégorie : </strong> {recipe.categoryId}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
}
