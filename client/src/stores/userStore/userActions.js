export const ADD_SESSION = "ADD_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";


export const addSession = (user) => {
  return {
    type: ADD_SESSION,
    payload: user,
  };
};

export const removeSession = () => {
  return {
    type: REMOVE_SESSION,
    payload: {}
  };
}
