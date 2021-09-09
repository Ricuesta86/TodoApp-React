import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./todoApp.css";

const initialState = {
  id: new Date().getTime(),
  desc: "Aprendiendo React",
  done: false
};

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <ul>
        <li> Hola</li>
        <li> Comer algo</li>
        <li> Aprender idiomas nuevo</li>
      </ul>
    </>
  );
};
