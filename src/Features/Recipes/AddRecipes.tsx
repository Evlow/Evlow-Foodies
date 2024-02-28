import React from 'react';

interface Ingredient {
    label: string;
    widget: JSX.Element;
}

interface RecipeFormProps {
    ingredients: Ingredient[];
}

const RecipeForm: React.FC<RecipeFormProps> = ({ ingredients }) => {
    return (
        <div className="content-ingredients">
            {ingredients.map((ingredient, index) => (
                <div key={index} className="bloc-ingredient">
                    <label>{ingredient.label}</label>
                    {ingredient.widget}
                </div>
            ))}
        </div>
    );
};

export default RecipeForm;