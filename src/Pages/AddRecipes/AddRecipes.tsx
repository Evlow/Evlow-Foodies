import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Response {
  token: string;
}

export default function AddRecipes() {
  const navigate = useNavigate();
  const [recipeTitle, setRecipeTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null); 

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("accessToken");

    const formData = new FormData();
    formData.append("recipeTitle", recipeTitle);
    formData.append("userId", userId!);
    formData.append("recipePicture", selectedImage!.name);
    console.log("le nom de mon image est : "+selectedImage!.name);

    axios
      .post<Response>(
        "https://localhost:5041/api/Recipe/CreateRecipe",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", 
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
      <h2>Ajouter une recette</h2>
      <form onSubmit={submitForm}>
        <div className="content-add-recipe">
          <div className="content-title">
            <input
              type="text"
              value={recipeTitle}
              onChange={(e) => setRecipeTitle(e.target.value)}
              placeholder="Titre de la recette"
            />
          </div>
          <div>
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
        </div>
        <button
          name="button"
          className="connexion-button-form"
          type="submit"
          disabled={!selectedImage || recipeTitle.trim() === ""}
        >
          Publier
        </button>
      </form>
    </>
  );
}
