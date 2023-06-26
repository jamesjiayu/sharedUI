import React, { MouseEvent } from "react";

// implementation
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
  size: "small" | "medium" | "large";
}
export function Button(props: ButtonProps) {
  const { specialProp, size, disabled = false, onClick, ...rest } = props;
  // do something with specialProp
  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   ///
  //   onClick();
  // };
  return <button disabled={disabled} onClick={onClick} {...rest} />;
}
interface CBProps extends React.ComponentPropsWithoutRef<"input"> {
  color: "primary" | "secondary";
}
export function InputCheckbox(props: CBProps) {
  const { color, ...rest } = props;
  return <input type="checkbox" color={color} {...rest} />;
}

function App() {
  // Type '"foo"' is not assignable to type '"button" | "submit" | "reset" | undefined'.(2322)
  // return <Button type="foo"> sldkj </Button>

  // no error
  return (
    <>
      <InputCheckbox color="primary" />
      <Button type="button" size="small">
        text{" "}
      </Button>
      ;
    </>
  );
}
