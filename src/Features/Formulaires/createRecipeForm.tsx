import React from 'react';
import '../Formulaires/inscriptionInputForm.css';

interface Props {
  type: 'text' 
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const CreateRecipeInputForm: React.FC<Props> = ({ type, value, onChange, label }) => {
  return (
    <div className="createRecipe-input-container">
      <label className="createRecipe-form-label" htmlFor={label}>{label}</label>
      <input 
        className="createRecipe-form-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CreateRecipeInputForm;
