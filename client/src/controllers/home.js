import {GET_TRANSFER_SENDED, GET_TRANSFER_INCOME} from '../constants/api'

export const getTransferSended = () => {
    return new Promise((resolve, reject) => {
      fetch(GET_TRANSFER_SENDED, {
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


  export const getTransferIncomes = () => {
    return new Promise((resolve, reject) => {
      fetch(GET_TRANSFER_INCOME, {
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