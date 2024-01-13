import RecipeCard from "./CardRecipes";
import { Recipe } from "../../Models/recipe";
import './CardRecipes.css'; 


interface Props {
    recipes : Recipe[]
}


export default function ListRecipes({recipes}: Props) {
    return (
        <div className="container-recipes">
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe.recipeId}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

    )
}