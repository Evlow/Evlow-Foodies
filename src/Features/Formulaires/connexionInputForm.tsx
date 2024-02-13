import React from "react";
import "../Formulaires/connexionInputForm.css";

interface Props {
  type: "text" | "password";
  value: string;
  label: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const ConnexionInputForm: React.FC<Props> = ({
  type,
  value,
  label,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="connexion-input-container">
      <label className="connexion-form-label" htmlFor={label}>
        {label}
      </label>
      <input
        className="connexion-form-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default ConnexionInputForm;
