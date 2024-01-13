import { useEffect, useState } from "react";
import Banners from "../../Features/Banners/banners";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import imgRecettes from "../../assets/recettes-petits-gones.png"
import { Recipe } from "../../Models/recipe";

export default function SweetRecipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("https://localhost:7041/api/Recipe/Category/3")
          .then((response) => response.json())
          .then((data) => setRecipes(data));
      }, []);
    

    return (
    <div className="">
    <Banners positionText="center" imgBanner={imgRecettes} textBanner="Les recettes P'tits Gônes"/>
    <ListRecipes recipes={recipes} />
    </div>  
    )
    };
    