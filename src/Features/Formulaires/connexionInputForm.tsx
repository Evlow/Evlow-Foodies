import React from 'react';
import '../Formulaires/connexionInputForm.css';

interface Props {
  type:'text' | 'password';
  value: string;
  label: string;
  onChange: (value: string) => void;

}

const ConnexionInputForm: React.FC<Props> = ({ type, value, label, onChange }) => {
  return (
    <div className="connexion-input-container">
      <label className="connexion-form-label" htmlFor={label}>{label}</label>
      <input className="connexion-form-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ConnexionInputForm;
