import React from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import TodoCard from "./components/TodoCard";
import AddTodoCard from "./components/AddTodoCard";

import styles from "./App.module.css";

function App() {
  const todos = useTypedSelector((state) => state.todos);
  const message = "Список задач пуст";
  const title = "Что по плану на сегодня";

  return (
    <div className={styles.page}>
      <div className={styles.pageMain}>
        <div className={styles.pageMainTitle}>
          <h1>{title}</h1>
        </div>
        <div className={styles.pageMainAddTodo}>
          <AddTodoCard />
        </div>
        <ul className={styles.pageMainCardsList}>
          {todos.map((todo) => (
            <li className={styles.pageMainCardsListItem} key={todo.id}>
              <TodoCard todo={todo} />
            </li>
          ))}
        </ul>
        {!todos.length && (
          <div className={styles.pageMainMessage}>
            <h2>{message}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
