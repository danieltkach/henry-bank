export const ADD_SESSION = "ADD_SESSION";
export const REMOVE_SESSION = "REMOVE_SESSION";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT"

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


export const addContact= user =>{
  console.log(user,"useeeeeeeeeer")
  return{
    type:ADD_CONTACT,
    payload:user
  }
}

export const deleteContact = (user) => {
  return {
    type: DELETE_CONTACT,
    payload: user,
  };
};

