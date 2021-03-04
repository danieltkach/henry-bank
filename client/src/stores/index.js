import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./userStore/userReducer";

const reducer = combineReducers({
  userReducer
});

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
