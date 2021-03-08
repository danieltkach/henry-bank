import { AsyncStorage } from 'react-native';
import { ADD_ACCOUNT, REMOVE_ACCOUNT } from "./accountActions";


const initialState = {
  account: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {...state, account: action.payload && action.payload || {}};
      break;

    case REMOVE_ACCOUNT:
      return {};
      break;

    default:
      return state;
  }
};

export default userReducer;
