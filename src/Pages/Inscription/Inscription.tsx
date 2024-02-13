import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/inscription.png";
import axios from "axios";
import InscriptionInputForm from '../../Features/Formulaires/inscriptionInputForm';
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";

interface Response {
  token: string;
}


export default function Inscription() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userConfirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState<Response>();

  // const handleLogin = () => {
  //   navigate("/connexion");
  // };

  const changeUserName = (value: string) => {
    setUserName(value);
  };

  const changeEmail = (value: string) => {
    setEmail(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const changeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post<Response>("https://localhost:5041/api/Authentication/Register", {
        userName,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setResponse(response.data);
        console.log(response.data);
        
       // Stocker le token dans le stockage local
       localStorage.setItem("accessToken", response.data.token);
       // localStorage.setItem("userId", response.data.user.userId.toString());

       // Rediriger vers la page d'accueil après la connexion réussie
       navigate("/connexion");
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
        <div className="inscription-form-container">
          <div className="inscription-form-input">
            <InscriptionInputForm
              type="text"
              value={userName}
              onChange={changeUserName}
              label="*Pseudo"
            />
            <InscriptionInputForm
              type="email"
              value={email}
              onChange={changeEmail}
              label="*Email"
            />
          </div>
          <div className="inscription-form-input">
            <InscriptionInputForm
              type="password"
              value={password}
              onChange={changePassword}
              label="*Mot de passe"
            />
            <InscriptionInputForm
              type="password"
              value={userConfirmPassword}
              onChange={changeConfirmPassword}
              label="*Confirmez le mot de passe"
            />
          </div>
        </div>
        <button name="button" className="inscription-button-form" type="submit">
          Je m'inscris
        </button>
      </form>
      <Footer></Footer>
    </>
  );
}
