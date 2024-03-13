/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Recipe } from "../../Models/recipe";
import { useParams } from "react-router-dom";
import NavBar from "../../app/Layout/Navbar/Navbar";
import "./RecipeSheet.css";
import iconPreparation from "../../assets/preparation.svg";
import iconIngredient from "../../assets/ingredient.svg";
import Footer from "../../app/Layout/Footer/Footer";

export default function RecipeSheet() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [recipe, setRecipe] = useState<Recipe | undefined>();
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5041/api/Recipe/RecipeId/${parseInt(recipeId!)}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [recipeId]);

  return (
    <>
    <NavBar></NavBar>
      <div className="content-recipe-sheet main-front">
        <div key={recipe?.recipeId} className="recipe-card">
          <div className="paragraphe-recipe-sheet">
            <h3 className="h3-recipe-sheet">{recipe?.recipeTitle}</h3>
          </div>
          <div className="content-recipe-img-front">
            <img
              className="recipe-img-front"
              src={recipe?.pictureUrl}
              alt={recipe?.recipeTitle}
            />
          </div>
          <article className="content-article">
            <section className="section-preparations">
              <div className="bloc-title">
                <h4 className="title-flex">
                  <img src={iconIngredient} />
                  Ingrédients
                </h4>
              </div>
            </section>
            <section className="section-preparations">
              <div className="bloc-title">
                <h4 className="sheet-recipe-h4">
                  <img src={iconPreparation} />
                  Préparations
                </h4>
              </div>
              <div>
                <p>Étape n°1</p>
                <p>{recipe?.ingredientN1}</p>
              </div>
            </section>
          </article>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

