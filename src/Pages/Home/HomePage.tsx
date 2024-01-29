/* eslint-disable no-unreachable */
import { Fragment, useEffect, useState } from "react";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import { Recipe } from "../../Models/recipe";
import HeroHome from "../../Features/Hero/HeroHome";
import NavBar from '../../app/Layout/Navbar/Navbar';
import Footer from "../../app/Layout/Footer/Footer";


export default function HomePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://localhost:7041/api/Recipe/GetRecipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return(
  <>
  <NavBar></NavBar>
  <HeroHome/>
    <ListRecipes recipes={recipes} />
    <Footer></Footer>
  </>);
}
