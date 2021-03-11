import { addContactFetch } from "../../controllers/user";

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


export const addContactAction= (userId,dataForm) => (dispatch) =>{
  console.log(userId,dataForm,"action")
  addContactFetch(userId,dataForm)
  .then(response =>{
    console.log(response)
    if(response.message === "Contacto ya existe.") {return alert("Este contacto ya existe")}
    dispatch({
      type:ADD_CONTACT,
      payload:response.contact
    })
  })
  .catch(err =>{
    console.log(err)
  })
}
  



export const deleteContact = (user) => {
  return {
    type: DELETE_CONTACT,
    payload: user,
  };
};

