import React, { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: "primary" | "secondary";
  size?: string;
  variant?: string;
}
// type intersectionType = CheckboxPropsType &
//   InputHTMLAttributes<HTMLInputElement>;

//fc return : JSX.Element or FC
function Button({
  children,
  color,
  disabled = false,
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  const constructClassName: () => string = () => {
    const colorVariantCls = `btn-${color}-${variant}`;
    const sizeCls = `btn-${size}`;
    return ["btn", colorVariantCls, sizeCls].join(" ");
  };
  const handleClick = (e: MouseEvent) => {};
  //console.log("...rest", { ...rest });
  return (
    <button
      disabled={disabled}
      className={constructClassName() + (className ? " " + className : "")}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
