import React, {
  useState,
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  ComponentPropsWithoutRef,
  InputHTMLAttributes
} from "react";
interface SwitchProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  color?: "primary" | "secondary" | "default";
  size?: "small" | "medium"; //'size' are incompatible.  size="20" number
  label?: string;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void; in ComponentPropsWithoutRef<"input">
}
//type BtnProps=BasebtnProps & ButtonHTMLAttributes<HTMLButtonElement>//Intersection Types
const Switch = (props: SwitchProps) => {
  const {
    color = "default",
    size = "medium",
    label,
    disabled = false,
    onChange,
    checked = false,
    className,
    ...rest
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(checked); // boolean | undefined if no default value checked = false
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e); // ChangeEvent<HTMLInputElement> | undefined // onChange is optional
    setIsChecked(e.target.checked);
    // ;
  };
  //console.log("...rest", { ...rest });
  const createClassName: () => string = () => {
    return "switch " + "switch_" + color + " switch_" + size;
  };
  //console.log(createClassName() + " " + "ttt");
  return (
    <>
      <input
        {...rest}
        {...{ a: "what in rest", b: "props object in JSX diff from JS" }} //a="what in rest", b="props object in JSX diff from JS"
        className={createClassName() + " " + className}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {label}
    </>
  );
};
export default Switch;

// let { bar, ...restt } = { foo: "aaa", bar: "bbb", a: 1 };
// console.log({ ...restt }); //!==rest, although both {foo: "aaa", a: 1}
//console.log(...{ a: "what in rest" }); ///error

// Mimic the UIUX of the MUI switch component( )
// https://mui.com/material-ui/react-switch/
// Find the UI design reference in Figma
// https://www.figma.com/file/e9mrJNqitnThCajlQvuyWv/Material-UI-Kit-1.0.2-(Copy)?type=design&node-id=268-0
// Users can customize the color by providing color props
// Users can decide whether or not to provide a label and the content of the label
// Users want to control whether the switch is disabled by providing props
// Use can decide whether on or off the switch by providing props externally
// Users can provide some callback function as props, callback will be triggered whenever the state is changed
// Users can choose different sizes of the switch by providing a size prop

//ICON!!

// interface A {
//   a: number;
// }
// interface B {
//   b: number;
// }
// var ab: A & B = { a: 1, b: 1 };
// var a: A = ab; // Assigning A & B to A
// var b: B = ab; // Assigning A & B to B
// //a={ a: 1, b: 1 }//error
// interface X {
//   p: A;
// }
// interface Y {
//   p: B;
// }
// let x1: X = { p: { a: 1 } };
// let x2: X = { p: ab };
// //let x3: X = { p: {a:1,b:1} }; //error
// var xy: X & Y = { p: ab }; // X & Y has property p of type A & B

// type F1 = (a: string, b: string) => void;
// type F2 = (a: number, b: number) => void;

// var f: F1 & F2 = (a: string | number, b: string | number) => {};
// f("hello", "world"); // Ok
// f(1, 2); // Ok
// //f(1, "test");         // Error
// console.log(xy);

//type BtnProps=BasebtnProps & ButtonHTMLAttributes<HTMLButtonElement>//Intersection Types
