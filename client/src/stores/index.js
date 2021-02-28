
import { createStore, combineReducers } from "redux";

import rootReducer from "./userStore/userReducers";

const reducer = combineReducers({
  user: rootReducer,
});

const store = createStore(reducer);
export default store;
