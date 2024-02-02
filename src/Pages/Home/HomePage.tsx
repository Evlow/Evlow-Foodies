import { Fragment, useEffect, useState } from "react";
import ListRecipes from "../../Features/Recipes/ListRecipes";
import { Recipe } from "../../Models/recipe";
import HeroHome from "../../Features/Hero/HeroHome";
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";
import "./HomePage.css";

export default function HomePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:5041/api/Recipe/GetRecipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <NavBar />
      <HeroHome />
      <article className="home-article">
        <section className="home-section">
          <h3 className="home-h3">
            <span>Qu’est ce qu’on mange ?</span>
          </h3>
          <p className="p-home">
            Qu'est ce qu'on mange ? Cette question est posée une multitude de
            fois ! 
            </p>
            <p className="p-home">
           Il est parfois diffcile de trouver une idée de repas ! Avec
            Evlow Foodies, vous trouverez des recettes, pour tous les goûts et
            faciles à réaliser !
          </p>
        </section>

        <section className="home-section">
          <h3 className="home-h3">
            <span>Découvrez les dernieres idées de recettes !</span>
          </h3>
          <ListRecipes recipes={recipes} />
        </section>
      </article>
      <Footer />
    </>
  );
}
