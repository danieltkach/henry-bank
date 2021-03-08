import {
  POST_ACCOUNT,
  GET_ACCOUNTS,
  GET_ACCOUNT_BY_ID,
  PUT_ACCOUNT_BY_ID,
  GET_BALANCE_BY_ID
} from '../constants/api';


export const createAccountFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${POST_ACCOUNT}/${dataId}`, {
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

export const readAccountsFetch = () => {
  return new Promise((resolve, reject) => {
    fetch(GET_ACCOUNTS, {
      method: 'GET'
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const readAccountByIdFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_ACCOUNT_BY_ID}/${dataId}`, {
      method: 'GET'
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}

export const updateAccountFetch = (dataId, dataForm) => {
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

export const readBalanceByIdFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_BALANCE_BY_ID}/${dataId}`, {
      method: 'GET'
    })
    .then(response => {
      resolve(response.json());
    })
    .catch(err => {
      console.log(err.message)
    });
  })
}
