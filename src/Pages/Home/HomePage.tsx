/* eslint-disable no-unreachable */
import { Fragment, useEffect, useState } from "react";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import { Recipe } from "../../Models/recipe";
import HeroHome from "../../Features/Hero/HeroHome";


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
    <ListRecipes recipes={recipes} />
  </>);
}
