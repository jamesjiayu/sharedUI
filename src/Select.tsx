/*
User should be able to decide the options and current value of the component by passing props
User should be able to control the open and close state of the select component by passing props
Developers can control the open state of the component from props.
Developers can listen to the value change of the component by providing the onChange callback to the props.
?Optionally, apply multi-select feature to the select component. check out Chip and checkmarks from MUI
no need: Try to mimic the UIUX of the MUI select component, handle everything gracefully.
no need:Proper animation should be applied when Select open/close.
*/
import React, {
  useState,
  FormEvent,
  ChangeEvent,
  ComponentPropsWithoutRef
} from "react";
interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  isOpen?: boolean;
  currentVal?: string;
  // onChangeFromProps?:
}
const Select = (props: SelectProps) => {
  const { isOpen = false, currentVal = "", onChange, children } = props;
  const [val, setVal] = useState<string>(currentVal);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //console.log(e.target.value);
    //setVal(e.currentTarget.value);//e:FormEvent<>
    setVal(e.target.value);
    onChange?.(e);
  }; // children?.length
  return (
    <>
      <select value={val} onChange={handleChange} size={isOpen ? 2 : undefined}>
        {children}
      </select>
    </>
  );
};
export default Select; //style={{ overflow: "auto" }}
