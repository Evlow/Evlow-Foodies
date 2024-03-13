import { useEffect, useState } from "react";
import Banners from "../../Features/Banners/banners";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import imgRecettes from "../../assets/recettes-sucrees.png";
import { Recipe } from "../../Models/recipe";
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";

export default function SweetRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://localhost:5041/api/Recipe/GetRecipesByCategoryId/2")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="">
      <NavBar></NavBar>

      <Banners
        positionText="left"
        imgBanner={imgRecettes}
        textBanner="Les recettes sucrées"
      />
      <div className="main-front">
        <ListRecipes recipes={recipes} />
      </div>
      <Footer></Footer>
    </div>
  );
}
