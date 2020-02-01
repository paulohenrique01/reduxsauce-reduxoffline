import { call, put } from "redux-saga/effects";
import todoService from "../../services/todoService";

import TodosActions from "../ducks/todos";

export function* addTodo({todo}) {     
  const {data} = yield call(todoService.saveTodo, todo);  
 
  yield put(TodosActions.addTodoSuccess(data));
}
