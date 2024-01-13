import React from 'react';
import { Recipe } from '../../Models/recipe';
import './CardRecipes.css'; 

interface Props {
  recipe: Recipe;
}

const CardRecipes: React.FC<Props> = ({ recipe }) => {
  return (
    <div className='card-container'>
      <a href={`/recipe/${recipe.recipeId}`} className="recipe-link">
        <div className="card-recipes">
          <img
            src={process.env.PUBLIC_URL + "/images/" + recipe.recipePicture}
            alt={recipe.recipeTitle}
            className="recipe-image" 
          />
          <p>{recipe.recipeTitle}</p>
        </div>
      </a>
    </div>
  );
};

export default CardRecipes;