import React, { useState } from "react";
import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/connexion.png";
import axios from "axios";
import ConnexionInputForm from "../../Features/Formulaires/connexionInputForm";
import { useNavigate } from "react-router-dom";
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";

interface Response {
  token: string;
  userId: string;
}

export default function Connexion() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [,setResponse] = useState<Response | null>(null);

  const changeUserName = (value: string) => {
    setUserName(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post<Response>(
        "https://localhost:5041/api/Authentication/Login/Login",
        {
          userName,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        setResponse(response.data);
        

        // Stocker le token dans le stockage local
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("userId", response.data.userId);

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
              value={userName}
              label="*Pseudo"
              onChange={changeUserName}
            />
          </div>
          <div className="connexion-form-input">
            <ConnexionInputForm
              type="password"
              value={password}
              label="*Mot de passe"
              onChange={changePassword}
            />
          </div>
        </div>
        <>
        <button
          name="button"
          className="connexion-button-form"
          type="submit"
        >
          Je me connecte
        </button>
        </>
      </form>
      <Footer></Footer>
    </>
  );
}