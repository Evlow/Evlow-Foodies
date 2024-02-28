import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateRecipeInputForm from "../../Features/Formulaires/createRecipeInputForm";
import "./AddRecipes.css";
import Header from "../../app/Layout/Header/header";
import Aside from "../../app/Layout/Aside/aside";

interface Response {
  token: string;
}

export default function AddRecipes() {
  const navigate = useNavigate();
  const [recipeTitle, setRecipeTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  //Initialisation d'un tableau vide avec 8 champs
  const [ingredients, setIngredients] = useState<string[]>(
    new Array(8).fill("")
  );
  //Initialisation d'un tableau vide avec 8 champs
  const [preparations, setPreparations] = useState<string[]>(
    new Array(8).fill("")
  );

  const changeRecipeTitle = (value: string) => {
    setRecipeTitle(value);
  };

  const handleChangeIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleChangePreparation = (index: number, value: string) => {
    const newPreparations = [...preparations];
    newPreparations[index] = value;
    setIngredients(newPreparations);
  };

  const addPreparation = () => {
    setPreparations([...preparations, ""]);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("accessToken");

    const formData = new FormData();
    formData.append("recipeTitle", recipeTitle);
    formData.append("userId", userId!);
    
    if (!selectedImage || recipeTitle.length <= 1) {
      alert("Veuillez remplir correctement les champs")
      return false;
    }

    formData.append("recipePicture", selectedImage);
    // Parcourt chaque élément du tableau ingredients et ajoute ces éléments au FormData
    ingredients.forEach((ingredient, index) => {
      formData.append(`ngredientN${index + 1}`, ingredient);
    });
    // Parcourt chaque élément du tableau preprations et ajoute ces éléments au FormData
    preparations.forEach((preparations, index) => {
      formData.append(`preparation${index + 1}`, preparations);
    });

    axios
      .post<Response>(
        "https://localhost:5041/api/Recipe/CreateRecipe",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <Aside />
      <article className="article-add-recipe">
        <h2>Ajouter une recette</h2>
        <form onSubmit={submitForm}>
          <div className="content-add-recipe-title">
            <CreateRecipeInputForm
              type="text"
              value={recipeTitle}
              onChange={changeRecipeTitle}
              label="Titre de la recette"
            />
          </div>
          <div className="image-recipe">
            {selectedImage && (
              <div>
                <img
                  alt="Preview"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </div>
            )}
            <br />
            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                setSelectedImage(event.target.files![0]);
              }}
            />
          </div>
          <section className="section-ingredients-preparations">
            <div className="ingredients">
              <img
                src={process.env.PUBLIC_URL + "/Images/ingredient.png"}
                height="80px"
                width="80px"
                alt=""
              />
              <h2 className="title-ingredient">Ingrédients</h2>
            </div>

            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[0]}
                onChange={(value) => handleChangeIngredient(0, value)}
                label="Ingrédient n° 1"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[1]}
                onChange={(value) => handleChangeIngredient(1, value)}
                label="Ingrédient n° 2"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[2]}
                onChange={(value) => handleChangeIngredient(2, value)}
                label="Ingrédient n° 3"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[3]}
                onChange={(value) => handleChangeIngredient(3, value)}
                label="Ingrédient n° 4"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[4]}
                onChange={(value) => handleChangeIngredient(4, value)}
                label="Ingrédient n° 5"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[5]}
                onChange={(value) => handleChangeIngredient(5, value)}
                label="Ingrédient n° 6"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[6]}
                onChange={(value) => handleChangeIngredient(6, value)}
                label="Ingrédient n° 7"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="text"
                value={ingredients[7]}
                onChange={(value) => handleChangeIngredient(7, value)}
                label="Ingrédient n° 8"
              />
            </div>
            <button type="button" onClick={addIngredient}>
              Ajouter un ingrédient
            </button>
          </section>
          <section className="section-ingredients-preparations">
            <div className="preparations">
              <img
                src={process.env.PUBLIC_URL + "/Images/preparation.png"}
                height="80px"
                width="80px"
                alt=""
              />
              <h2 className="title-preparation">Préparations</h2>
            </div>
            <CreateRecipeInputForm
              type="textarea"
              value={preparations[0]}
              onChange={(value) => handleChangePreparation(0, value)}
              label="Préparation n° 1"
            />
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="textarea"
                value={preparations[1]}
                onChange={(value) => handleChangePreparation(1, value)}
                label="Préparation n° 2"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="textarea"
                value={preparations[2]}
                onChange={(value) => handleChangePreparation(2, value)}
                label="Préparation n° 3"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="textarea"
                value={preparations[3]}
                onChange={(value) => handleChangePreparation(3, value)}
                label="Préparation n° 4"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="textarea"
                value={preparations[4]}
                onChange={(value) => handleChangePreparation(4, value)}
                label="Préparation n° 5"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="textarea"
                value={preparations[5]}
                onChange={(value) => handleChangePreparation(5, value)}
                label="Préparation n° 6"
              />
            </div>
            <div className="create-recipe-input-row">
              <CreateRecipeInputForm
                type="textarea"
                value={preparations[6]}
                onChange={(value) => handleChangePreparation(6, value)}
                label="Préparation n° 7"
              />
            </div>
            <CreateRecipeInputForm
              type="textarea"
              value={preparations[7]}
              onChange={(value) => handleChangePreparation(7, value)}
              label="Préparation n° 8"
            />

            <button type="button" onClick={addPreparation}>
              Ajouter une préparation
            </button>
          </section>
          <button name="button" className="connexion-button-form" type="submit">
            Publier
          </button>
        </form>
      </article>
    </>
  );
}
