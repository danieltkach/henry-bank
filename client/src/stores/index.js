import { createStore, combineReducers } from "redux";
import userReducer from "./userStore/userReducer";

const store = createStore(combineReducers({userReducer}));

export default store;
