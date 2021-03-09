import {
  POST_ACCOUNT,
  GET_ACCOUNTS,
  GET_ACCOUNT_BY_ID,
  PUT_ACCOUNT_BY_ID,
  GET_BALANCE_BY_ID
} from '../constants/api';


export const createAccountFetch = (userId) => {
  console.log('POST', userId);
  return new Promise((resolve, reject) => {
    fetch(`${POST_ACCOUNT}/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
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

export const readAccountsFetch = () => {
  console.log('GET');
  return new Promise((resolve, reject) => {
    fetch(GET_ACCOUNTS, {
      method: 'GET'
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

export const readAccountByIdFetch = (dataId) => {
  console.log('GET');
  return new Promise((resolve, reject) => {
    fetch(`${GET_ACCOUNT_BY_ID}/${dataId}`, {
      method: 'GET'
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

export const updateAccountFetch = (dataId, dataForm) => {
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
      console.log('RESPONSE POST < STATUS OK');
      resolve(response.json());
    })
    .catch(err => {
       console.log(err.message)
    });
  })
}

export const readBalanceByIdFetch = (dataId) => {
  console.log('GET', dataId);
  return new Promise((resolve, reject) => {
    fetch(`${GET_BALANCE_BY_ID}/${dataId}`, {
      method: 'GET'
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
