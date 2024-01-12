/* eslint-disable no-unreachable */
import { Fragment, useEffect, useState } from "react";
import RecipeList from "../Recipes/RecipeList";
import { Recipe } from "../../Models/recipe";
import HeroHome from "../Hero/HeroHome";
import Banners from "../Banners/banners";
import imgRecettes from "../../assets/recettes-salees.png"

export default function HomePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://localhost:7041/api/Recipe")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return(
  <>
  <HeroHome/>
  <Banners positionText="right" imgBanner={imgRecettes} textBanner="Les recettes salées"/>
    <RecipeList recipes={recipes} />
  </>);
}
