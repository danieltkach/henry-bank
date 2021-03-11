import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from "./userStore/userReducer";
import accountReducer from "./accountStore/accountReducer";
import thunk from 'redux-thunk'


const reducer = combineReducers({
  accountReducer,
  userReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
