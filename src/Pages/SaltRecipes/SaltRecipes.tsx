import Banners from "../../Features/Banners/banners";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import { Recipe } from "../../Models/recipe";
import Footer from "../../app/Layout/Footer/Footer";
import NavBar from "../../app/Layout/Navbar/Navbar";
import imgRecettes from "../../assets/recettes-salees.png";
import { useEffect, useState } from "react";

export default function SaltRecipes() {
  // Déclaration de recipes et de sa fonction de mise à jour setRecipes
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Utilisation du hook useEffect pour effectuer une requête au chargement de la page
  useEffect(() => {
    // Requête GET pour récupérer les recettes de la catégorie salée depuis l'API 
    fetch("https://localhost:5041/api/Recipe/GetRecipesByCategoryId/1")
      // Traitement de la réponse en format JSON
      .then((response) => response.json())
      // Mise à jour de l'état recipes avec les données obtenues
      .then((data) => setRecipes(data));
  }, []);

  // Retour de l'élément JSX représentant la page des recettes salées
  return (
    <div className="">
      <NavBar></NavBar>
      <Banners
        positionText="right"
        imgBanner={imgRecettes} 
        textBanner="Les recettes salées"
      />
      <div className="main-front">
        {/* Affichage de la liste des recettes salées */}
        <ListRecipes recipes={recipes} />
      </div>
      <Footer></Footer>
    </div>
  );
}

