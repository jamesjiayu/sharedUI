import React from "react";
type State = {
  text: string;
};
type Props = {};

class InputFormEvt extends React.Component<Props, State> {
  state = {
    text: ""
  };

  // typing on RIGHT hand side of =      FormEvent=changeEvent overhere
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
    console.log(this.state.text);
  };
  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.onChange} />
        <input type="text" value={this.state.text} onChange={this.onChange} />
      </div>
    );
  }
}
export default InputFormEvt;
