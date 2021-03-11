import { AsyncStorage } from 'react-native';
import {
  ADD_ACCOUNT,
  REMOVE_ACCOUNT,
  TRANSACTION_LIST,
  UPDATE_BALANCE
} from './accountActions';

const initialState = {
  account: {}
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return { ...state, account: (action.payload && action.payload) || {} };
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

    case TRANSACTION_LIST:
      return {
        account: {
          ...state.account,
          transactions: action.payload
        }
      };

    default:
      return state;
  }
};

export default accountReducer;
