import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface RecipeFormData {
  RecipeTitle: string;
  token: string;
}

export default function AddRecipes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: RecipeFormData) => {
    const token = localStorage.getItem("accessToken");
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5041/api/Recipe/CreateRecipe",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>Ajouter une recette</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content-add-recipe">
          <div className="content-title">
            <label htmlFor="RecipeTitle">Titre de la recette</label>
            <input
              type="text"
              id="RecipeTitle"
              {...register("RecipeTitle", { required: "Titre requis" })}
            />
            {errors.RecipeTitle && <p>{errors.RecipeTitle.message}</p>}
          </div>
        </div>
        <input className="btn-bo" type="submit" value="Publier" />
        {isLoading && <p>Chargement en cours...</p>}
      </form>
    </>
  );
};
