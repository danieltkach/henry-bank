import { AsyncStorage } from 'react-native';
import { ADD_ACCOUNT, REMOVE_ACCOUNT, UPDATE_BALANCE } from "./accountActions";


const initialState = {
  account: {}
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return { ...state, account: action.payload && action.payload || {} };
      break;

    case REMOVE_ACCOUNT:
      return {};
      break;

    case UPDATE_BALANCE:
      return {
        account: {
          ...state.account,
          balance: state.account.balance + parseFloat(action.payload)
        }
      };
      break;

    default:
      return state;
  }
};

export default accountReducer;
