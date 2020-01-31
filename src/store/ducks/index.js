import { combineReducers } from "redux";

import { reducer as offline } from "redux-offline-queue";
import { reducer as todos } from "./todos";

export default combineReducers({
  offline,
  todos
});
