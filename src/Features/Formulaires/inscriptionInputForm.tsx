import React from 'react';
import '../Formulaires/inscriptionInputForm.css';

interface Props {
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  label: string;
  errorMessage?: string;
}

const InscriptionInputForm: React.FC<Props> = ({ type, value, onChange, label, errorMessage }) => {
  return (
    <div className="inscription-input-container">
      <label className="inscription-form-label" htmlFor={label}>{label}</label>
      <input 
        className="inscription-form-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default InscriptionInputForm;
