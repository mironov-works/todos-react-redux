import { ITodosState, TodoAction } from "../../models";
import { TodosActionsTypes } from "../types";

const defaultState: ITodosState = {
  todos: [],
};

export const todoReducer = (
  state = defaultState,
  action: TodoAction
): ITodosState => {
  switch (action.type) {
    case TodosActionsTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodosActionsTypes.CHANGE_TODO:
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isChecked: !todo.isChecked };
          }
          return todo;
        }),
      };
    case TodosActionsTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export type TodoState = ReturnType<typeof todoReducer>;
