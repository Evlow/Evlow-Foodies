import React from 'react';
import { Recipe } from '../../Models/recipe';
import './CardRecipes.css'; 

// Définition de l'interface Props
interface Props {
 // Instance de la recette (Recipe)
  recipe: Recipe; 
}

const CardRecipes: React.FC<Props> = ({ recipe }) => {
  return (
    <a href={`/recipe/${recipe.recipeId}`} className='card-container'> 
        <div className="card-recipes"> 
          <img
            src={recipe.pictureUrl} 
            alt={recipe.recipeTitle} 
            className="recipe-image" 
          />
          <p>{recipe.recipeTitle}</p>
        </div>
      </a>
  );
};

export default CardRecipes;
