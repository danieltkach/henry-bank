import {
  POST_REGISTER_USER,
  POST_LOGIN_USER,
  PUT_USER,
  GET_USER_BY_ID,
  GET_USERS,
  GET_ADDRESS,
  GET_VERIFY
} from './index';


export const registerUserFetch = (dataForm) => {
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
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
  
}

export const loginUserFetch = (dataForm) => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:4001/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm)
    })
    .then(response => {
      console.log(response)
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
  
}

export const updateUserFetch = (dataId, dataForm) => {
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
      resolve(response.json());
    })
    .catch(err => {
       console.log(err.message)
    });
  })
  
}

// export const readAuthFetch = () => {}

export const readUserByIdFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_USER_BY_ID}/${dataId}`, {
      method: 'GET',
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const readUsersFetch = () => {
  return new Promise((resolve, reject) => {
    fetch(GET_USERS, {
      method: 'GET',
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const readAddressFetch = (queryData) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_ADDRESS}/?direccion=${queryData}`, {
      method: 'GET',
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
  
}

export const verifyUserFetch = (token) => {
  return new Promise((resolve, reject) => {
    fetch({GET_VERIFY}, {
      method: 'POST',
      body: JSON.stringify(token)
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}
