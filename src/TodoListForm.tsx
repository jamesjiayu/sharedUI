import React, { FormEvent, useEffect, useState } from "react";
interface Todo {
  id: number;
  name: string;
  description: string;
  isDone: boolean;
}
const mockData = [
  { id: 1, name: "running", description: "run 1 mile", isDone: false },
  { id: 2, name: "coding", description: "code 1 hour", isDone: false }
];
export default function TodoListForm() {
  const [state, setState] = useState({ name: "", description: "" });
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    setData(mockData);
  }, []);
  useEffect(() => {
    // console.log("state:", state);
    mockData.push({ ...state, isDone: false, id: mockData.length + 1 });
  }, [state]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    const target = e.target as EventTarget & HTMLFormElement;
    // console.log(new FormData(e.target));
    const formData = new FormData(target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); //{name: "shopping", description: "buy viggies"}
    // setState({ name: "1name", description: "desc" });
    setState({
      name: formJson?.name.toString(),
      description: formJson?.description.toString()
    });
  };
  return (
    <>
      <h5>Todo List</h5>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}: </span>
            <span>{todo.description}</span>{" "}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name: <input type="text" name="name" />
        </label>
        <input type="text" name="description" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
//value={state.name}  value={state.description}
