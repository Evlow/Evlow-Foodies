import RecipeCard from "./CardRecipes";
import { Recipe } from "../../Models/recipe";
import './CardRecipes.css'; 

interface Props {
  recipes: Recipe[];
}

export default function ListRecipes({ recipes }: Props) {
  // Filtrer les 3 dernières recettes
  const latestRecipes = recipes.slice(-3);

  return (
    <div className="container-recipes">
      {latestRecipes.map((recipe, index) => (
        <div className="recipe-item" key={recipe.recipeId}>
          <RecipeCard recipe={recipe} />
          {(index + 1) % 3 === 0 && <div className="clearfix"></div>}
        </div>
      ))}
    </div>
  );
}
