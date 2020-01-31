import { createActions, createReducer } from "reduxsauce";
import { markActionsOffline } from "redux-offline-queue";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodoRequest: ["todo"],
  addTodoSucess: ["todo"], 
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

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO_REQUEST]:add,  
 // [Types.ADD_TODO_SUCCESS]: (state, { todo }) =>  state.update("data", data => [...data, todo]),
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