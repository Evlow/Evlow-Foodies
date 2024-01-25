import React from 'react';


interface Props {
    label: string;
    isChecked : boolean;
    onChange: (value: string) => void;

  }
  

  const Checkbox :React.FC<Props> = ({label, isChecked, onChange}) =>{
    return (
      <div>
        <input
          type="checkbox"
          id={label}
          checked={isChecked}
          onChange={(e) => onChange(e.target.value)}
          />
        <label htmlFor={label}>{label}</label>
      </div>
    );
  };
  
  export default Checkbox;
