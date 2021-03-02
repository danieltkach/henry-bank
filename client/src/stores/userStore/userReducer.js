import { AsyncStorage } from 'react-native';
import { ADD_SESSION, SET_SESSION, REMOVE_SESSION } from "./userActions";


const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return {user: action.payload};
      break;

    case SET_SESSION:
      return {user: action.payload};
      break;

    case REMOVE_SESSION:
      return {user: action.payload};
      break;

    default:
      return state;
  }
};

export default userReducer;
