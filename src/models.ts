import { TodosActionsTypes } from "./store/types";

export interface ITodo {
  id: number;
  description: string;
  isChecked: boolean;
  color: string;
}
export interface ITodosState {
  todos: ITodo[];
}

interface AddTodoAction {
  type: TodosActionsTypes.ADD_TODO;
  payload: ITodo;
}
interface ChangeTodoAction {
  type: TodosActionsTypes.CHANGE_TODO;
  payload: number;
}
interface RemoveTodoAction {
  type: TodosActionsTypes.REMOVE_TODO;
  payload: number;
}
export type TodoAction = AddTodoAction | ChangeTodoAction | RemoveTodoAction;
