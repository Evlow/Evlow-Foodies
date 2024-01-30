import React, { useEffect, useState } from "react";
import axios from "axios";
import Aside from "../../app/Layout/Aside/aside";
import { User } from '../../Models/user';
import Header from "../../app/Layout/Header/header";
import { Recipe } from '../../Models/recipe';
import '../HomePageBO/HomePageBO.css'
import { Cookies, useCookies } from "react-cookie";

interface Response {
  token: string;
}

export default function HomePageBackOffice() {
  const [user, setUser] = useState<User>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [cookies,] = useCookies();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      // Récupérer les informations de l'utilisateur
      axios
        .get<User>("https://localhost:7041/api/User/"+localStorage.getItem("userId"), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);

          // Récupérer les recettes de l'utilisateur
          axios
            .get<Recipe[]>("https://localhost:7041/api/Recipe/GetRecipesByUserId/"+localStorage.getItem("userId"), {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((recipesResponse) => {
              setRecipes(recipesResponse.data);
            })
            .catch((recipesError) => {
              console.log(recipesError);
            });

          console.log(cookies.User);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []); 

  return (
    <>
      <Header />
      <Aside />

      <div className="dashboard">
        {user && (
          <>
            <div className="content-profil">
            <h2 className="h2-welcome">Bienvenue {user.userFirstName} sur ton espace !</h2>
            <section className="edit-profil">
   
                <h3 className="h3-profil"> Mes infos personnelles </h3>
                <div className="profil">
                  <p><strong>Nom : </strong> {user.userLastName}</p>
                  <br />
                  <p><strong>Prénom : </strong>{user.userFirstName}</p>
                  <br />
                  <p><strong>Pseudo : </strong> {user.userPseudo}</p>
                  <br />
                  <p><strong>Email : </strong> {user.userEmail}</p>
                  <br />
                </div>
                <div className="buttons-edit">
                  <div className="edit-password">
                    <a className="btn-edit-password" href={`/edit-password/${user.userId}`}>
                      Modifier mon mot de passe
                    </a>
                  </div>
                  <div className="edit-email">
                    <a className="btn-edit-email" href={`/edit/${user.userId}`}>
                      Modifier mon email
                    </a>
                  </div>
                </div>
              </section>

              <section className="edit-recipe">
                <h3 className="h3-profil"> Mes recettes publiées ({recipes.length}) </h3>
                <div className="profil">
                  {recipes.map((recipe, index) => (
                    <div key={index} className="profil">
                      <p><strong>Titre : </strong> {recipe.recipeTitle}</p>
                      <p><strong>Catégorie : </strong>{recipe.categoryId}</p>
                      <p><strong>Date de création : </strong>{new Date(recipe.recipeCreatedAt).toLocaleDateString()}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
}