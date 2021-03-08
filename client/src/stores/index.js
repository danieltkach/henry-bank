import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./userStore/userReducer";
import accountReducer from "./userStore/userReducer";

const reducer = combineReducers({
  userReducer,
  accountReducer
});

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
