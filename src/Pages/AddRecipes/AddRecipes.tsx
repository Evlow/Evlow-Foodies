import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import RecipeInputForm from "../../Features/Formulaires/createRecipeInputForm";
import "./AddRecipes.css";
import Header from "../../app/Layout/Header/header";
import Aside from "../../app/Layout/Aside/aside";
import axios from "axios";
import { Category } from "../../Models/category";
import { Recipe } from "../../Models/recipe";

interface Response {
  token: string;
}
interface Item {
  categoryId: number;
  recipeTitle: string;
  pictureUrl: string;
  recipeCreatedAt: Date;
  recipeUpdatedAt: Date;
  recipeStarNote: number;
  ingredientN1: string;
  ingredientN2: string;
  ingredientN3: string;
  ingredientN4: string;
  ingredientN5: string;
  ingredientN6: string;
  ingredientN7: string;
  ingredientN8: string;
  preparationN1: string;
  preparationN2: string;
  preparationN3: string;
  preparationN4: string;
  preparationN5: string;
  preparationN6: string;
  preparationN7: string;
  preparationN8: string;
  image: File | null;
}

const AddRecipes: React.FC = () => {
  const [item, setItem] = useState<Item>({
    categoryId: 0,
    recipeTitle: "",
    pictureUrl: "",
    recipeCreatedAt: new Date(),
    recipeUpdatedAt: new Date(),
    recipeStarNote: 0,
    ingredientN1: "",
    ingredientN2: "",
    ingredientN3: "",
    ingredientN4: "",
    ingredientN5: "",
    ingredientN6: "",
    ingredientN7: "",
    ingredientN8: "",
    preparationN1: "",
    preparationN2: "",
    preparationN3: "",
    preparationN4: "",
    preparationN5: "",
    preparationN6: "",
    preparationN7: "",
    preparationN8: "",
    image: null,
  });

  // Fonction pour gérer le changement de l'image sélectionnée par l'utilisateur
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageURL = URL.createObjectURL(e.target.files[0]); // Crée une URL pour l'image sélectionnée
      setImageURL(imageURL); // Met à jour l'URL de l'image dans l'état local
      setItem({
        ...item,
        image: e.target.files[0], // Met à jour l'image dans l'état des données du formulaire
      });
    }
  };

  // État pour stocker les catégories récupérées depuis l'API
  const [categories, setCategories] = useState<Category[]>([]);

  // Utilise useEffect pour charger les catégories une fois que le composant est monté
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fonction pour récupérer les catégories depuis l'API
  const fetchCategories = async () => {
    try {
      // Effectue une requête GET à l'API pour obtenir les catégories
      const response = await axios.get<Category[]>(
        "https://localhost:5041/api/Category/GetCategories"
      );
      // Met à jour l'état avec les catégories récupérées depuis la réponse de l'API
      setCategories(response.data);
    } catch (error) {
      // En cas d'erreur lors de la récupération des catégories, affiche une erreur dans la console
      console.error("Error pour récupérer les catégories:", error);
    }
  };

  // Fonction pour gérer le changement de catégorie sélectionnée par l'utilisateur
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Met à jour l'ID de la catégorie sélectionnée dans l'état de l'objet item
    setItem({
      ...item,
      categoryId: parseInt(e.target.value), // Convertit la valeur en nombre entier
    });
  };

  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("recipeTitle", item.recipeTitle);
    formData.append("RecipePicture", item.image as File);
    formData.append("categoryId", item.categoryId.toString());
    formData.append("ingredientN1", item.ingredientN1);
    formData.append("ingredientN2", item.ingredientN2);
    formData.append("ingredientN3", item.ingredientN3);
    formData.append("ingredientN4", item.ingredientN4);
    formData.append("ingredientN5", item.ingredientN5);
    formData.append("ingredientN6", item.ingredientN6);
    formData.append("ingredientN7", item.ingredientN7);
    formData.append("ingredientN8", item.ingredientN8);
    formData.append("preparationN1", item.preparationN1);
    formData.append("preparationN2", item.preparationN2);
    formData.append("preparationN3", item.preparationN3);
    formData.append("preparationN4", item.preparationN4);
    formData.append("preparationN5", item.preparationN5);
    formData.append("preparationN6", item.preparationN6);
    formData.append("preparationN7", item.preparationN7);
    formData.append("preparationN8", item.preparationN8);
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("accessToken");
    formData.append("userId", userId!);

    try {
      await axios.post(
        "https://localhost:5041/api/Recipe/CreateRecipe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Item created successfully");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <>
      <article className="article-add-recipe">
        <form onSubmit={handleSubmit}>
          <h2>Ajouter une recette</h2>
          <div className="content-add-recipe-title">
            <div className="content-add-recipe-title">
              <RecipeInputForm
                type="text"
                value={item.recipeTitle}
                onChange={(value) => setItem({ ...item, recipeTitle: value })}
                label="Titre de la recette"
              />
            </div>
          </div>
          <br />
          <div>
            <div className="image-recipe">
              <label>
                Image de la recette:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {/* Affichage de l'image sélectionnée */}
            {imageURL && (
              <div className="image-preview">
                <img src={imageURL} alt="Preview" />
              </div>
            )}
          </div>
          <div className="ingredients">
            <img
              src={process.env.PUBLIC_URL + "/Images/ingredient.png"}
              height="80px"
              width="80px"
              alt=""
            />
            <h2 className="title-ingredient">Ingrédients</h2>
          </div>
          <section className="section-ingredients-preparations">
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN1}
                onChange={(value) => setItem({ ...item, ingredientN1: value })}
                label="Ingrédient n° 1"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN2}
                onChange={(value) => setItem({ ...item, ingredientN2: value })}
                label="Ingrédient n° 2"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN3}
                onChange={(value) => setItem({ ...item, ingredientN3: value })}
                label="Ingrédient n° 3"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN4}
                onChange={(value) => setItem({ ...item, ingredientN4: value })}
                label="Ingrédient n° 4"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN5}
                onChange={(value) => setItem({ ...item, ingredientN5: value })}
                label="Ingrédient n° 5"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN6}
                onChange={(value) => setItem({ ...item, ingredientN6: value })}
                label="Ingrédient n° 6"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN7}
                onChange={(value) => setItem({ ...item, ingredientN7: value })}
                label="Ingrédient n° 7"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="text"
                value={item.ingredientN8}
                onChange={(value) => setItem({ ...item, ingredientN8: value })}
                label="Ingrédient n° 8"
              />
            </div>
          </section>
          <div className="preparations">
            <img
              src={process.env.PUBLIC_URL + "/Images/preparation.png"}
              height="80px"
              width="80px"
              alt=""
            />
            <h2 className="title-preparation">Préparations</h2>
          </div>
          <section className="section-ingredients-preparations">
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN1}
                onChange={(value) => setItem({ ...item, preparationN1: value })}
                label="Préparation n° 1"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN2}
                onChange={(value) => setItem({ ...item, preparationN2: value })}
                label="Préparation n° 2"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN3}
                onChange={(value) => setItem({ ...item, preparationN3: value })}
                label="Préparation n° 3"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN4}
                onChange={(value) => setItem({ ...item, preparationN4: value })}
                label="Préparation n° 4"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN5}
                onChange={(value) => setItem({ ...item, preparationN5: value })}
                label="Préparation n° 5"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN6}
                onChange={(value) => setItem({ ...item, preparationN6: value })}
                label="Préparation n° 6"
              />
            </div>
            <div className="create-recipe-input-row">
              <RecipeInputForm
                type="textarea"
                value={item.preparationN7}
                onChange={(value) => setItem({ ...item, preparationN7: value })}
                label="Préparation n° 7"
              />
            </div>
            <RecipeInputForm
              type="textarea"
              value={item.preparationN8}
              onChange={(value) => setItem({ ...item, preparationN8: value })}
              label="Préparation n° 8"
            />

            <div>
              <label htmlFor="category">Catégorie :</label>
              <select
                id="category"
                value={item.categoryId}
                onChange={handleCategoryChange}
              >
                <option value="">Sélectionner une catégorie</option>
                {categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </section>
          <button name="button" className="connexion-button-form" type="submit">
            Publier
          </button>
        </form>
      </article>
    </>
  );
};

export default AddRecipes;
