
import { createStore, combineReducers } from "redux";

import rootReducer from "./userStore/userReducers";

const reducers = combineReducers({
  user: rootReducer,
});

const store = createStore(
  reducers
);

export default store;
