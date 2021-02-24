export const GET_USER = "GET_USER";

export const getUser = (payload) => {
  return {
    type: GET_USER,
    payload,
  };
};
