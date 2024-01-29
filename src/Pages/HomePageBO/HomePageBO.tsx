import React, { useEffect, useState } from "react";
import axios from '../../app/axiosConfig';
import Aside from "../../app/Layout/Aside/aside";
import { User } from "../../Models/user";
import Header from "../../app/Layout/Header/header";
import { Recipe } from '../../Models/recipe';
import '../HomePageBO/HomePageBO.css'

interface Response {
  token: string;
}

export default function HomePageBackOffice() {
  const [user, setUser] = useState<User>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
      axios.get('/User')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
      console.error('Erreur lors de la récupération des tâches : ',
      error);
      });
      }, []);

    const token = localStorage.getItem("accessToken");

    if (token) {
      axios
        .get<User>("https://localhost:7041/api/User", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  

  return (
    <>
      <Header />
      <Aside />

      <div className="dashboard">
        {user && (
          <>
            <div className="content-profil">   
              <section className="edit-profil">
              <h2>Bienvenue {user.userFirstName} sur ton espace !</h2>
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

              {/* <section className="edit-recipe">
                <h3 className="h3-profil"> Mes recettes publiées ({userData.Recipe.length}) </h3>
                <div className="profil">
                  {<recipeData.Recipe.map((recipe, index) => (
                    <div key={index} className="profil">
                      <p><strong>Titre : </strong> {recipe.title}</p>
                      <p><strong>Catégorie : </strong>{recipe.category}</p>
                      <p><strong>Date de création : </strong>{new Date(recipe.createdAt).toLocaleDateString()}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </section> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
