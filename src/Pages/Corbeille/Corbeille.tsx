import React, { useState } from 'react';
import { Recipe } from '../../Models/recipe';
import Header from '../../app/Layout/Header/header';
import Aside from '../../app/Layout/Aside/aside';
import axios from 'axios';

interface CorbeilleProps {
  // Retirez la déclaration des recettes en tant que prop
}

export default function Corbeille() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const deleteRecipe = (recipeId: number) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      axios
        .delete(
          `http://localhost:5041/api/Recipe/DeleteRecipe/${recipeId}`,
          {
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
      <div className="content-card">
        {recipes.map((recipe) => (
          <article key={recipe.recipeId} className="card">
            <h3 className="recipes-h3">{recipe.recipeTitle}</h3>
            <div className="content-recipe-img">
              <img className="recipe-img-home" src={recipe.recipePicture} alt="image" />
            </div>
            <button
                  onClick={() => deleteRecipe(recipe.recipeId)}
                  className="btn-delete"
                >
                  SUPPRIMER
                </button>
          </article>
        ))}
      </div>
    </>
  );
}
