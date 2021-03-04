import { AsyncStorage } from 'react-native';
import {
  POST_REGISTER_USER,
  POST_LOGIN_USER,
  PUT_USER,
  GET_USER_BY_ID,
  GET_USERS,
  GET_ADDRESS,
  POST_CODE,
  GET_PROFILE_AUTH
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

// export const readAuthFetch = () => {}

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
  return new Promise((resolve, reject) => {
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
