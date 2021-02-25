import { GET_USER } from './userActions';

const initialState = {
  user: {},
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        user: action.payload
      };

    default:
      return state;
  }
};

export default user_reducer;
