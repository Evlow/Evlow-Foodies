import React, { useState } from "react";
import Banners from "../../Features/Banners/banners";
import Descriptions from "../../Features/Descriptions/Descriptions";
import imgRecettes from "../../assets/inscription.png";
import axios from "axios";
import ConnexionInputForm from "../../Features/Formulaires/connexionInputForm";

interface Response {
  reponse: string | "no response";
}

export default function Connexion() {
  const [userPseudo, setPseudo] = useState("");
  const [userPassword, setPassword] = useState("");
  const [response, setResponse] = useState<Response>();
  const changePseudo = (value: string) => {
    setPseudo(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const changePseudo = (value: string) => {
      setPseudo(value);
    };
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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
  <button name="button" className="connexion-button-form" type="submit">
    Je me connecte
  </button>
</form>
    </>
  );
}
