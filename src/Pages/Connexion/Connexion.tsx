import React, { useState } from "react";
import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/inscription.png";
import axios from "axios";
import ConnexionInputForm from "../../Features/Formulaires/connexionInputForm";
import { useNavigate } from "react-router-dom";
import { User } from '../../Models/user';
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";

interface Response {
  token: string;
  user: User;
}

export default function Connexion() {
  const navigate = useNavigate();
  const [userPseudo, setPseudo] = useState("");
  const [userPassword, setPassword] = useState("");
  const [,setResponse] = useState<Response | null>(null);

  const changePseudo = (value: string) => {
    setPseudo(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post<Response>(
        "https://localhost:7041/api/Auth/Login",
        {
          userPseudo,
          userPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setResponse(response.data);
        console.log(response.data);

        // Stocker le token dans le stockage local
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("userId", response.data.user.userId.toString());

        // Rediriger vers la page d'accueil après la connexion réussie
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <NavBar></NavBar>
      <Banners positionText="right" imgBanner={imgRecettes} textBanner="" />
      <Descriptions
        titleDescription="Envie de partager vos recettes ?<br/> De retrouver vos recettes coup de coeur ?"
        textDescription="Rejoignez dès maintenant la communauté <br/>Evlow Foodies "
      />

      <form onSubmit={submitForm}>
        <div className="connexion-form-container">
          <div className="connexion-form-input">
            <ConnexionInputForm
              type="text"
              value={userPseudo}
              label="*Pseudo"
              onChange={changePseudo}
            />
          </div>
          <div className="connexion-form-input">
            <ConnexionInputForm
              type="password"
              value={userPassword}
              label="*Mot de passe"
              onChange={changePassword}
            />
          </div>
        </div>
        <button
          name="button"
          className="connexion-button-form"
          type="submit"
        >
          Je me connecte
        </button>
      </form>
      <Footer></Footer>
    </>
  );
}