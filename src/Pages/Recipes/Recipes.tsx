import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../app/Layout/Header/header";
import Aside from "../../app/Layout/Aside/aside";
import "../Recipes/Recipes.css";
import axios from "axios";
import { User } from "../../Models/user";
import { useCookies } from "react-cookie";
import { Recipe } from "../../Models/recipe";

interface Response {
  token: string;
  userId: string;

}

export default function Recipes()  {
  const [user, setUser] = useState<User>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [cookies] = useCookies();

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
      <article className="recipes">
        <section className="content-card">
          <div className="add-recipe">
            <Link to="/recipes/add">
              <h2>
                + <br />
                Ajouter une recette
              </h2>
            </Link>
          </div>

          {recipes.map((recipe) => (
            <div key={recipe.recipeId} className="card">
              <h3 className="recipes-h3">{recipe.recipeTitle}</h3>
              <div className="content-recipe-img">
                <Link to={`/recipe_sheet/${recipe.recipeId}`}>
                  <img
                    className="recipe-img-home"
                    src={`/images/${recipe.recipePicture}`}
                    alt="image"
                  />
                </Link>
              </div>
              <div className="btn-card">
                <Link
                  to={`/recipes/edit/${recipe.recipeId}`}
                  className="btn-edit"
                >
                  MODIFIER
                </Link>
                <a
                  href={`/recipes/delete/${recipe.recipeId}`}
                  className="btn-delete"
                >
                  SUPPRIMER
                </a>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};

