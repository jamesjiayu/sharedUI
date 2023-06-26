import React, { ChangeEvent, InputHTMLAttributes } from "react";
import "./Checkbox.css";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  size?: "small" | "medium" | "large" | number;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  size = "medium",
  ...inputProps
}) => {
  const containerStyle: React.CSSProperties = {
    fontSize:
      size === "small" ? "0.8rem" : size === "large" ? "1.6rem" : "1.2rem"
    // Add any other custom styles for the checkbox container
  };

  const checkmarkStyle: React.CSSProperties = {
    width:
      typeof size === "number"
        ? `${size}px`
        : size === "small"
        ? "12px"
        : size === "large"
        ? "20px"
        : "16px",
    height:
      typeof size === "number"
        ? `${size}px`
        : size === "small"
        ? "12px"
        : size === "large"
        ? "20px"
        : "16px"
    // Add any other custom styles for the checkbox checkmark
  };

  return (
    <label className="checkbox-container" style={containerStyle}>
      {label}
      <input
        type="checkbox"
        className="checkbox-input"
        style={checkmarkStyle}
        {...inputProps}
      />
      <span className="checkbox-checkmark" style={checkmarkStyle}></span>
    </label>
  );
};

export default Checkbox;
