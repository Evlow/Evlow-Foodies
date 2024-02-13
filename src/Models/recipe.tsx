export interface Recipe {
  recipeId: number;
  userId: number;
  categoryId: number;
  recipeTitle: string;
  recipePicture: string;
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
}
