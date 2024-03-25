import RecipeCard from "./CardRecipes";
import { Recipe } from "../../Models/recipe";
import "./CardRecipes.css";
import { Link } from "react-router-dom";

interface Props {
  recipes: Recipe[]; 
}

// Export du composant ListRecipes
export default function ListRecipes({ recipes }: Props) {
  // Filtrer les 3 dernières recettes
  const latestRecipes = recipes.slice(-3);

  return (
    <div className="container-recipes"> 
      {latestRecipes.map((recipe, index) => ( 
        <Link
          to={`/sheet-recipe/${recipe.recipeId}`}
          key={recipe.recipeId}
        >
            <RecipeCard recipe={recipe} /> {/* Composant de card de recette */}
            {(index + 1) % 3 === 0 && <div className="clearfix"></div>} 
        </Link>
      ))}
    </div>
  );
}
