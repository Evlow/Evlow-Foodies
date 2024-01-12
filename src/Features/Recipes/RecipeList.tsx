import { Grid } from "@mui/material"
import RecipeCard from "./RecipeCard";
import { Recipe } from "../../Models/recipe";

interface Props {
    recipes : Recipe[]
}


export default function RecipeList({recipes}: Props) {
    return (
        <Grid container spacing={4}>
            {recipes.map(recipe => (
                <Grid item xs={3} key={recipe.recipeId}>
                    <RecipeCard recipe={recipe} />
                </Grid>
            ))}
        </Grid>

    )
}