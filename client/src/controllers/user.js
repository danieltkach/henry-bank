import { AsyncStorage } from 'react-native';
import {
  POST_REGISTER_USER,
  POST_LOGIN_USER,
  PUT_USER,
  GET_USER_BY_ID,
  GET_USERS,
  GET_ADDRESS,
  POST_CODE,
  GET_PROFILE_AUTH,
  ADD_CONTACT,
  DELETE_CONTACT,
  POST_EMAIL_VERIFY,
  PUT_PROFILE
} from '../constants/api';


export const registerUserFetch = (dataForm) => {
  console.log('POST', dataForm);
  return new Promise((resolve, reject) => {
    fetch(POST_REGISTER_USER, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log('RESPONSE POST < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const loginUserFetch = (dataForm) => {
  console.log('POST', dataForm);
  return new Promise((resolve, reject) => {
    fetch(POST_LOGIN_USER, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log('RESPONSE POST < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const updateUserFetch = (dataId, dataForm) => {
  console.log('PUT', dataId, dataForm);
  return new Promise((resolve, reject) => {
    fetch(`${PUT_USER}/${dataId}`, {
      method: 'PUT',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log('RESPONSE PUT < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
       console.log(err.message)
    });
  })
}

export const updateProfileFetch = (dataId, dataForm) => {
  console.log('PUT', dataId, dataForm);
  return new Promise((resolve, reject) => {
    fetch(`${PUT_PROFILE}/${dataId}`, {
      method: 'PUT',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log('RESPONSE PUT < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
       console.log(err.message)
    });
  })
}

export const emailVerifyFetch = (dataForm) => {
  console.log('POST', dataForm);

  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  let body = JSON.stringify(dataForm);
  let requestOptions = { method: 'POST', headers, body, redirect: 'follow' };

  return new Promise((resolve, reject) => {
    fetch(POST_EMAIL_VERIFY, requestOptions)
    .then(response => {
      console.log('RESPONSE POST < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const readUserByIdFetch = (dataId) => {
  console.log('GET', dataId);
  return new Promise((resolve, reject) => {
    fetch(`${GET_USER_BY_ID}/${dataId}`, {
      method: 'GET',
    })
    .then(response => {
      console.log('RESPONSE GET < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const readUsersFetch = () => {
  console.log('GET');
  return  new Promise((resolve, reject) => {
    fetch(GET_USERS, {
      method: 'GET',
    })
    .then(response => {
      console.log('RESPONSE GET < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const readAddressFetch = (queryData) => {
  console.log('GET', queryData);
  return new Promise((resolve, reject) => {
    fetch(`${GET_ADDRESS}?direccion=${queryData}`, {
      method: 'GET',
    })
    .then(response => {
      console.log('RESPONSE GET < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const verifyUserFetch = (dataForm) => {
  console.log('POST', dataForm);
  return new Promise((resolve) => {
    fetch(POST_CODE, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log('RESPONSE POST < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const profileAuthFetch = (token) => {
  console.log('GET', token);
  return new Promise((resolve, reject) => {
    fetch(`${GET_PROFILE_AUTH}?token=${token}`, {
      method: 'GET',
    })
    .then(response => {
      console.log('RESPONSE GET < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const addContactFetch = (dataId,dataForm)=>{
  console.log("PUT",dataForm);
  return new Promise((resolve,reject) =>{
    fetch(`${ADD_CONTACT}/${dataId}`,{
      method: 'PUT',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify (dataForm)
    })
    .then(response => {
      console.log('STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
       console.log(err.message)
    });
  })
}

export const deleteContactFetch = (dataId,dataForm)=>{
  console.log("DELETE",dataId,dataForm);
  return new Promise((resolve,reject) =>{
    fetch(`${DELETE_CONTACT}/${dataId}`,{
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log('STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
       console.log(err.message,"ERORR")
    });
  })
}
