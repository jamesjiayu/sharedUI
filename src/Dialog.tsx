// Developers can provide title, content, actions of the dialog component from children props of the component

// Dialog component should have a dimed backdrop by default, users can close the dialog by clicking on the backdrop

// Users shouldn’t be able to scroll the page when the dialog is open

// Developers should be able to listen to the close of the dialog by providing the onClose callback function.

// Developers should be able to control the open/close of the dialog from props.

import React, { useState } from "react";
const emails = ["username@gmail.com", "user02@gmail.com"];
interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  title?: string;
  content?: string; //?
}
const SimpleDialog = (props: SimpleDialogProps) => {
  const { open = false, selectedValue, onClose, title } = props;
  const [isOpen, setIsOpen] = useState(open);
  return (
    <>
      <div
        style={{
          display: isOpen ? "block" : "none",
          width: "100px",
          height: "100px"
        }}
      >
        {title}
      </div>
    </>
  );
};
export { SimpleDialog };
