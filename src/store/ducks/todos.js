import { createActions, createReducer } from "reduxsauce";
import { markActionsOffline } from "redux-offline-queue";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodoRequest: ["todo"],
  addTodoSuccess: ["todo"], 
  //toggleTodoRequest: ["id"],
  //removeTodoRequest: ["id"]
});

markActionsOffline(Creators, ["addTodoRequest"]);

export const TodosTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { ...action.todo, complete: false }
];

const addSuccess = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.hash === action.todo.hash ? { ...todo, ...action.todo} : todo
  );

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO_REQUEST]:add,  
  [Types.ADD_TODO_SUCCESS]: addSuccess,
  //[Types.TOGGLE_TODO_REQUEST]: toggle,
  //[Types.REMOVE_TODO_REQUEST]: remove
});




const toggle = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);