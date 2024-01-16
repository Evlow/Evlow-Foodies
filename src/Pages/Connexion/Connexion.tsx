import React, { useState, ChangeEvent } from "react";
import Banners from "../../Features/Banners/banners";
import imgRecettes from "../../assets/connexion.png";
import Descriptions from "../../Features/Descriptions/Descriptions";

const MyForm = () => {
  const [formData, setFormData] = useState({ pseudo: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7041/api/Auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Traitez la réponse du serveur
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="">
        <Banners imgBanner={imgRecettes} />
        <Descriptions 
          titleDescription="Envie de partager vos recettes ?<br/> De retrouver vos recettes coup de coeur ?"
          textDescription="Connectez-vous dès à présent ! "
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Soumettre</button>
      </form>
    </>
  );
};

export default MyForm;
