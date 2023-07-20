import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReduser";

export const store = createStore(todoReducer, applyMiddleware(thunk));


