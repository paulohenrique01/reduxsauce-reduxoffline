import { all, spawn, takeEvery } from "redux-saga/effects";

import { addTodo } from "./todos";
import { TodosTypes } from "../ducks/todos";

//import { startWatchingNetworkConnectivity } from "./offline";

export default function* rootSaga() {
  yield all([
   // spawn(startWatchingNetworkConnectivity),

    takeEvery(TodosTypes.ADD_TODO_REQUEST, addTodo)
  ]);
}
