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

export default function Recipes() {
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
          `https://localhost:5041/api/User/GetUserById?userId=${userId}`,
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
              `https://localhost:5041/api/Recipe/GetRecipesByUserId?userId=${userId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((recipesResponse) => {
              const recettes = recipesResponse.data;
              const coder = new TextEncoder()
              const transformed = recettes.map(recette => {
                const encoded = coder.encode(recette.recipePicture);
                const blob = new Blob([encoded.buffer], {
                  type: "image/jpg"
                });
                
                const objurl = URL.createObjectURL(blob);
                console.log(objurl)
                recette.recipePicture = objurl;
                return recette;
              })
              setRecipes(transformed);
            })
            .catch((recipesError) => {
              console.log(recipesError);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  
  const deleteRecipe = (recipeId: number) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      axios
        .delete(
          `https://localhost:5041/api/Recipe/DeleteRecipe/${recipeId}`,          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // Mettez à jour l'état des recettes après la suppression
          setRecipes((prevRecipes) =>
            prevRecipes.filter((recipe) => recipe.recipeId !== recipeId)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Header />
      <Aside />
      <article className="recipes">
        <section className="content-card">
          <div className="add-recipe">
            <Link to="/ajouter-une-recette">
              <h2>
                + <br />
                Ajouter une recette
              </h2>
            </Link>
          </div>

          {recipes.map((recipe) => (
  <div key={recipe.recipeId} className="card">
    <Link to={`/sheet-recipe/${recipe.recipeId}`} className="recipe-link">
      <h3 className="recipes-h3">{recipe.recipeTitle}</h3>
      <div className="content-recipe-img">
        <img
          className="recipe-img-home"
          src={recipe.recipePicture}
          alt="image"
        />
      </div>
    </Link>
    <div className="btn-card">
      <Link to={`/recipes/edit/${recipe.recipeId}`} className="btn-edit">
        MODIFIER
      </Link>
      <button
        onClick={() => deleteRecipe(recipe.recipeId)}
        className="btn-delete"
      >
        SUPPRIMER
      </button>
    </div>
  </div>
))}
        </section>
      </article>
    </>
  );
}
