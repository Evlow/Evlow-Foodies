import React from 'react';
import "./formBO.css"

interface Props {
  type: "textarea" | "text"
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const RecipeInputForm: React.FC<Props> = ({ type, value, onChange, label }) => {
  return (
    <>
      <label className="create-recipe-form-label" htmlFor={label}>{label}</label>
      <input 
        className="create-recipe-form-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default RecipeInputForm;
