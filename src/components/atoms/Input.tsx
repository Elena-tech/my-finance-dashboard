import React from "react";
import "../../styles/atoms/Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

export default Input;
