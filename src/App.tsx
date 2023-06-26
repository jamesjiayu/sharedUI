import "./styles.css";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Select from "./Select";
import { Button as TRButton, InputCheckbox } from "./tsReactCheatBtn";
import { ChangeEvent, FormEvent, useState } from "react";
import Switch from "./Switch";
import { TreeView } from "./TreeView";
import TodoListForm from "./TodoListForm";
import Tabs from "./Tabs";
const emails = ["username@gmail.com", "user02@gmail.com"];
const Switch1 = ({ onToggle }: any) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onToggle && onToggle(newChecked);
  };

  return (
    <svg
      className={`switch ${checked ? "switch-on" : "switch-off"}`}
      onClick={handleToggle}
      width="60"
      height="30"
      viewBox="0 0 60 30"
    >
      <rect className="switch-background" width="60" height="30" rx="15" />
      <circle
        className={`switch-toggle ${checked ? "toggle-on" : "toggle-off"}`}
        cx={checked ? "45" : "15"}
        cy="15"
        r="12"
      />
    </svg>
  );
};

export default function App() {
  const [checked, setChecked] = useState<boolean>(false);
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value); //value !NO
  //   setChecked(!checked);
  // };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked); //e.target.checked
    //console.log(event.target.checked); //  <input type="checkbox" color="primary"></input>
  };
  // icon={<BookmarkBorderIcon />}
  //   checkedIcon={<BookmarkIcon />}
  const [valSelect, setValSelect] = useState<string>("10");
  //console.log(valSelect);
  return (
    <div>
      <Tabs />
      <TodoListForm />
      <TreeView />
      <Select
        isOpen={true}
        currentVal={valSelect}
        onChange={(e) => {
          setValSelect(e.target.value);
          // console.log(e.target.value, "valselect=", valSelect);
        }}
      >
        <option value="10">Ten</option>
        <option value="20">20</option>
      </Select>
      <Switch
        color="default"
        label="label!"
        checked={false}
        id="hahaa"
        className="tttt"
        onChange={handleChange}
        size="small"
      ></Switch>
      <br />
      <div className="dialog-demo">
        <div>SELECT:{emails[0]}</div>
        <Button color="secondary">OPEN SIMPLE dialog</Button>
      </div>

      <Checkbox
        color="primary"
        label="my test label"
        checked={checked}
        onChange={handleChange}
      />
      <br />
      <TRButton size="small" disabled>
        ts React cheat
      </TRButton>
      <InputCheckbox checked color="primary" />
      <Switch1
        onToggle={(isChecked: boolean) => {
          console.log("Switch toggled:", isChecked);
        }}
      />
    </div>
  );
}

//<Button type="button"> text </Button>
//ts Generic
// type C = { comment: string; author: string };
// interface ArticleInterface<T, B> {
//   title: string;
//   authors: string[];
//   comments: T[];
//   islock: B;
// }
// //const article=new ArticleInterface<C>
// const a: ArticleInterface<C, boolean> = {
//   title: "",
//   authors: ["james B"],
//   comments: [
//     {
//       comment: "this is a comment",
//       author: "Jim"
//     },
//     {
//       comment: "2nd comment",
//       author: "J"
//     }
//   ],
//   islock: true
// };
