import Banners from "../../Features/Banners/banners";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import { Recipe } from "../../Models/recipe";
import Footer from "../../app/Layout/Footer/Footer";
import NavBar from "../../app/Layout/Navbar/Navbar";
import imgRecettes from "../../assets/recettes-salees.png";
import { useEffect, useState } from "react";

export default function SaltRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://localhost:5041/api/Recipe/GetRecipesByCategoryId/1")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="">
      <NavBar></NavBar>
      <Banners
        positionText="right"
        imgBanner={imgRecettes}
        textBanner="Les recettes salées"
      />
      <ListRecipes recipes={recipes} />
      <Footer></Footer>
    </div>
  );
}
