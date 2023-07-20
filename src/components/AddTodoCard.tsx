import React, { useState } from "react";

import styles from "../styles/addTodoCard.module.css";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getRandomColor } from "../utils/random-color";
import { TodosActionsTypes } from "../store/types";

export default function AddTodoCard() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useTypedSelector((state) => state.todos);
  const [lastId, setLastId] = useState(todos.length + 1);

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: lastId,
      description: value,
      isChecked: false,
      color: getRandomColor(),
    };
    setLastId(lastId + 1);
    dispatch({ type: TodosActionsTypes.ADD_TODO, payload: newTodo });
    setValue("");
  };

  const isInputValueEmpty = () => {
    return !value.length;
  };
  return (
    <form className={styles.addTodo} onSubmit={submitHandler}>
      <input
        className={styles.addTodoInput}
        placeholder="Добавить новую задачу"
        type="text"
        value={value}
        onChange={inputValueHandler}
      />
      <button className={styles.addTodoButton} disabled={isInputValueEmpty()}>
        Добавить
      </button>
    </form>
  );
}
