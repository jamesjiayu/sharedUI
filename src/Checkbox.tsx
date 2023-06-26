import React, {
  FormEvent,
  ChangeEvent,
  ChangeEventHandler,
  useState,
  ComponentPropsWithoutRef,
  ReactNode
} from "react";
interface CheckboxPropsType extends ComponentPropsWithoutRef<"input"> {
  color?: "primary" | "secondary" | "default"; //primary blue, red, grey
  label?: string;
  icon?: ReactNode; //?
  checkedIcon?: ReactNode;
  //size?: "small" | "medium" ; // 'size' are incompatible.  size="20"
}
//  Type '"small" | undefined' is not assignable to type 'number | undefined'.
// Property 'icon' does not exist on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'
const Checkbox = (props: CheckboxPropsType) => {
  const {
    label,
    color,
    icon,
    checkedIcon,
    checked = false,
    onChange,
    ...rest
  } = props;

  // const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   onChange?.(e); //FormEvent??????????
  //   console.log(e.target.value);
  // }; // e.target.checked
  //const handleChange2: ChangeEventHandler<HTMLInputElement> = (e) => {};
  // 2 tags not only input ? ComponentPropsWithoutRef<"input">???
  return (
    <label>
      <input
        type="checkbox"
        color={color}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      {label}
    </label>
  );
};

export default Checkbox;
//  const [liked, setLiked] = useState(true);
// checked={liked}
// onChange={(e)=>setLiked(e.target.checked)}
//https://www.figma.com/file/e9mrJNqitnThCajlQvuyWv/Material-UI-Kit-1.0.2-(Copy)?node-id=249-0
//? Developers should be able to choose the size of the component among some predefined size options from props.
// Developers should be able to choose the color of the component among some predefined color options from props.
//? Developers should be able to decide the icons used to represent the checked/unchecked state of the component by passing the icon from props.
// Developers can decide the label of the component by passing props.
// developers can control the checked/unchecked state of the component from outside of the component by passing a prop.
//Developers can listen to the change of the checked/unchecked event from outside of the component by passing the onChange callback function as a prop.

// icon={<BookmarkBorderIcon />}
//         checkedIcon={<BookmarkIcon />}
//extends ComponentPropsWithoutRef<"checkbox">
