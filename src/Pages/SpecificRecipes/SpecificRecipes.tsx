import { useEffect, useState } from "react";
import Banners from "../../Features/Banners/banners";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import imgRecettes from "../../assets/recettes-specifiques.png"
import { Recipe } from "../../Models/recipe";

export default function SweetRecipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("https://localhost:7041/api/Recipe/Category/4")
          .then((response) => response.json())
          .then((data) => setRecipes(data));
      }, []);
    

    return (
    <div className="">
    <Banners positionText="left" imgBanner={imgRecettes} textBanner="Les régimes spécifiques"/>
    <ListRecipes recipes={recipes} />
    </div>  
    )
    };
    