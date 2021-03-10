export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT";
export const UPDATE_BALANCE = "UPDATE_BALANCE";


export const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    payload: account,
  };
};

export const removeAccount = () => {
  return {
    type: REMOVE_ACCOUNT,
    payload: {}
  };
};

export const updateBalance = (balance) => {
  return {
    type: UPDATE_BALANCE,
    payload: balance
  };
};
