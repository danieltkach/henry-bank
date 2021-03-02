import { AsyncStorage } from 'react-native';
import { profileAuthFetch } from '../../controllers/user';

export const ADD_SESSION = "ADD_SESSION";
export const SET_SESSION = 'SET_SESSION'
export const REMOVE_SESSION = "REMOVE_SESSION";

export const addSession = token => dispatch => {
  let user;
  profileAuthFetch(token)
  .then(responseProfile => {
    user = responseProfile.user
    return AsyncStorage.setItem('session', responseProfile.token);
  })
  .then(response => {
    dispatch({
      type: ADD_SESSION,
      payload: user
    })
  })
  .catch(err => console.log(err));
};

export const setSession = () => dispatch => {
  AsyncStorage.getItem('session')
  .then(responseToken => {
    return profileAuthFetch(responseToken);
  })
  .then(responseProfile => {
    dispatch({
      type: SET_SESSION,
      payload: responseProfile.user
    })
  })
  .catch(err => console.log(err));
}

export const removeSession = () => {
  return {
    type: REMOVE_SESSION,
    payload: {}
  };
}
