import { useSelector, TypedUseSelectorHook } from "react-redux";
import { TodoState } from "../store/reducers/todoReduser";

export const useTypedSelector: TypedUseSelectorHook<TodoState> = useSelector;
