import { AsyncStorage } from 'react-native';
import { ADD_SESSION, REMOVE_SESSION } from "./userActions";


const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return {...state, user: action.payload && action.payload || {}};
      break;

    case REMOVE_SESSION:
      return {};
      break;

    default:
      return state;
  }
};

export default userReducer;
