import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./userStore/userReducer";
import accountReducer from "./accountStore/accountReducer";

const reducer = combineReducers({
  accountReducer,
  userReducer
});

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
