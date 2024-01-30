import React, { useState } from "react";
import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/inscription.png";
import axios from "axios";
import InscriptionInputForm from '../../Features/Formulaires/inscriptionInputForm';
import NavBar from "../../app/Layout/Navbar/Navbar";
import Footer from "../../app/Layout/Footer/Footer";

interface Response {
  reponse: string | "no response";
}

export default function Inscription() {
  const [userFirstName, setFirstName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [userPseudo, setPseudo] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userConfirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState<Response>();

  const changeFirstName = (value: string) => {
    setFirstName(value);
  };

  const changeLastName = (value: string) => {
    setLastName(value);
  };

  const changePseudo = (value: string) => {
    setPseudo(value);
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
      .post<Response>("https://localhost:7041/api/Auth/Register", {
        userFirstName,
        userLastName,
        userPseudo,
        userEmail,
        userPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setResponse(response.data);
        console.log(response.data);
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
          <div className="inscription-form-inputreut">
            <InscriptionInputForm
              type="text"
              value={userFirstName}
              onChange={changeFirstName}
              label="*Prénom"
            />
            <InscriptionInputForm
              type="text"
              value={userLastName}
              onChange={changeLastName}
              label="*Nom"
            />
          </div>
          <div className="inscription-form-input">
            <InscriptionInputForm
              type="text"
              value={userPseudo}
              onChange={changePseudo}
              label="*Pseudo"
            />
            <InscriptionInputForm
              type="email"
              value={userEmail}
              onChange={changeEmail}
              label="*Email"
            />
          </div>
          <div className="inscription-form-input">
            <InscriptionInputForm
              type="password"
              value={userPassword}
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
