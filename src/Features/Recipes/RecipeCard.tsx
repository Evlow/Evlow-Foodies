import { Card, CardContent, CardMedia } from "@mui/material";
import { Recipe } from "../../Models/recipe";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250, backgroundSize: "contain" }}
        image = {process.env.PUBLIC_URL + "/images/" + recipe.recipePicture}
        title={recipe.recipeTitle}
        />
      <CardContent>
        title = {recipe.recipeTitle}</CardContent>
    </Card>
  );
}
