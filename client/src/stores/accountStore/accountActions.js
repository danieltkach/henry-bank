export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';

export const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    payload: account
  };
};

export const removeAccount = () => {
  return {
    type: REMOVE_ACCOUNT,
    payload: {}
  };
};
