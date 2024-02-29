import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

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
//   name: string;
//   description: string;
  image: File | null;
}

const AddRecipes2: React.FC = () => {
  const [item, setItem] = useState<Item>({
  categoryId: 0,
  recipeTitle: '',
  pictureUrl: '',
  recipeCreatedAt: new Date(),
  recipeUpdatedAt: new Date(),
  recipeStarNote: 0,
  ingredientN1: '',
  ingredientN2: '',
  ingredientN3: '',
  ingredientN4: '',
  ingredientN5: '',
  ingredientN6: '',
  ingredientN7: '',
  ingredientN8: '',
    image: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setItem({
        ...item,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('recipeTitle', item.recipeTitle);
    formData.append('RecipePicture', item.image as File);
    formData.append('ingredientN1', item.ingredientN1);
    formData.append('ingredientN2', item.ingredientN2);
    formData.append('ingredientN3', item.ingredientN3);
    formData.append('ingredientN4', item.ingredientN4);
    formData.append('ingredientN5', item.ingredientN5);
    formData.append('ingredientN6', item.ingredientN6);
    formData.append('ingredientN7', item.ingredientN7);
    formData.append('ingredientN8', item.ingredientN8);
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("accessToken");
    formData.append("userId", userId!);
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint to handle item creation
      await axios.post("https://localhost:5041/api/Recipe/CreateRecipe", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,

        },
      });
      console.log('Item created successfully');
    } catch (error) {
      // Handle error
      console.error('Error creating item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre de la recette:
        <input type="text" name="recipeTitle" value={item.recipeTitle} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        Catégorie:
        <input type="text" name="categoryId" value={item.categoryId} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Ingrédient n1:
        <input type="text" name="ingredientN1" value={item.ingredientN1} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n2:
        <input type="text" name=" ingredientN2" value={item.ingredientN2} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n3:
        <input type="text" name=" ingredientN3" value={item.ingredientN3} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n4:
        <input type="text" name=" ingredientN4" value={item.ingredientN4} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n5:
        <input type="text" name=" ingredientN5" value={item.ingredientN5} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n6:
        <input type="text" name=" ingredientN6" value={item.ingredientN6} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n7:
        <input type="text" name=" ingredientN7" value={item.ingredientN7} onChange={handleInputChange} />
      </label>
      <br />
      <label>
      Ingrédient n8:
        <input type="text" name=" ingredientN8" value={item.ingredientN8} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Publier</button>
    </form>
  );
};

export default AddRecipes2;