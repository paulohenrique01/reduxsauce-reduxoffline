import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import TodosActions from "../ducks/todos";

export function* addTodo({todo}) {
  alert(JSON.stringify(todo))
  const response = yield call(api.post, JSON.stringify(todo));
  alert(JSON.stringify(response))
  yield put(TodosActions.addRepositorySuccess(response.data));
}
