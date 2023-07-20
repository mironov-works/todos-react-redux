import styles from "../styles/todos.module.css";
import { ITodo } from "../models";
import IconTrash from "./IconTrash";
import { useDispatch } from "react-redux";
import { TodosActionsTypes } from "../store/types";

interface TodoProps {
  todo: ITodo;
}
export default function TodoCard({ todo }: TodoProps) {
  const dispatch = useDispatch();

  function changeTodoHandler() {
    dispatch({ type: TodosActionsTypes.CHANGE_TODO, payload: todo.id });
  }
  function removeTodoHandler() {
    dispatch({ type: TodosActionsTypes.REMOVE_TODO, payload: todo.id });
  }
  return (
    <div className={`${styles.todoCard} ${styles["todoCardBg" + todo.color]}`}>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={changeTodoHandler}
      />
      <span className={todo.isChecked ? styles.todoCardInputChecked : ""}>
        {todo.description}
      </span>
      <button className={styles.todoCardButton} onClick={removeTodoHandler}>
        <IconTrash height="24px" width="24px" />
      </button>
    </div>
  );
}
