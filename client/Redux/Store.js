import { createStore, combineReducers } from "redux";

import rootReducer from "./Reducers";

const reducer = combineReducers({
  user: rootReducer,
});

const store = createStore(reducer);
export default store;
