import {
  GET_TRANSFER_SENDED,
  GET_TRANSFER_INCOME,
  POST_TRANSFER,
  PUT_TRANSFER,
  PUT_RECHARGE,
  GET_TRANSACTIONS,
  GET_STATISTICS
} from '../constants/api';

export const createTransactionFetch = (dataId, dataForm) => {
  return new Promise((resolve, reject) => {
    fetch(`${POST_ACCOUNT}/${dataId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const readTransferFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${POST_TRANSFER}/${dataId}`, {
      method: 'GET'
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const readIncomeFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_TRANSFER_INCOME}/${dataId}`, {
      method: 'GET'
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const rechargeFetch = (dataForm) => {
  console.log('PUT TRANSFER', dataForm);
  return new Promise((resolve, reject) => {
    fetch(`${PUT_RECHARGE}/`, {
      method: 'PUT',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
      .then((response) => {
        console.log('RESPONSE PUT TRANSFER < STATUS OK');
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const listTransactions = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_TRANSACTIONS}/${dataId}`, {
      method: 'GET'
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const newTransferFetch = (dataId, dataForm) => {
  console.log('PUT TRANSFER', dataId, dataForm);
  console.log(PUT_TRANSFER);
  return new Promise((resolve, reject) => {
    fetch(`${PUT_TRANSFER}/${dataId}`, {
      method: 'PUT',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
      .then((response) => {
        console.log('RESPONSE PUT TRANSFER < STATUS OK');
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};

export const statisticsFetch = (dataId) => {
  return new Promise((resolve, reject) => {
    fetch(`${GET_STATISTICS}/${dataId}`, {
      method: 'GET'
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
};
