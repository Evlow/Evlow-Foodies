import Banners from "../../Features/Banners/banners"
import ListRecipes from "../../Features/Recipes/ListRecipes";
import { Recipe } from "../../Models/recipe";
import imgRecettes from "../../assets/recettes-salees.png"
import { useEffect, useState } from "react";


export default function SaltRecipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("https://localhost:7041/api/Recipe/Category/1")
          .then((response) => response.json())
          .then((data) => setRecipes(data));
      }, []);
    

    return (
    <div className="">
    <Banners positionText="right" imgBanner={imgRecettes} textBanner="Les recettes salées"/>
    <ListRecipes recipes={recipes} />
    </div>  
    )
    };
