import React from 'react';
import '../Formulaires/inscriptionInputForm.css';

interface Props {
  type: "textarea" | "text"
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const RecipeInputForm: React.FC<Props> = ({ type, value, onChange, label }) => {
  return (
    <div className="create-recipe-input-container">
      <label className="create-recipe-form-label" htmlFor={label}>{label}</label>
      <input 
        className="create-recipe-form-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default RecipeInputForm;
