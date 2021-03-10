import {
  HOST,
  PORT_API_USER,
  PORT_API_TRANSACTION,
  PORT_API_GATEWAY
} from '@env';

// const HOST = '192.168.0.10';
// const PORT_API_USER = '4001';
// const PORT_API_TRANSACTION = '4002';
// const PORT_API_GATEWAY = '8080';

export const API_USER_HOST = `http://192.168.3.160:${PORT_API_USER}`;
export const API_TRANSACTION_HOST = `http://${HOST}:${PORT_API_TRANSACTION}`;

//Fetchs asociadas a User
export const POST_REGISTER_USER = `${API_USER_HOST}/user/signup`; //#dataForm
export const POST_LOGIN_USER = `${API_USER_HOST}/user/login`; //#dataForm
export const PUT_USER = `${API_USER_HOST}/user`; //:dataId & dataForm
export const GET_USER_BY_ID = `${API_USER_HOST}/user`; //:dataId
export const GET_USERS = `${API_USER_HOST}/user`;
export const ADD_CONTACT = `${API_USER_HOST}/user/contacts`; //dataId
export const POST_CODE = `${API_USER_HOST}/user/verify`; //:token
export const GET_PROFILE_AUTH = `${API_USER_HOST}/profile`;
export const DELETE_CONTACT = `${API_USER_HOST}/user/contacts`; //dataId;
export const POST_EMAIL_VERIFY = `${API_USER_HOST}/user/send/email`; //#dataForm;
export const GET_ADDRESS = `${API_USER_HOST}/user/validate-address`; //?direccion=:queryData

//Fetchs asociadas a Transactions
export const GET_TRANSFER_SENDED = `${API_TRANSACTION_HOST}/transaction/transfers`; //:dataId
export const GET_TRANSFER_INCOME = `${API_TRANSACTION_HOST}/transaction/incomes`; //:dataId
export const POST_TRANSFER = `${API_TRANSACTION_HOST}/transaction/transfer`; //#dataForm
export const PUT_TRANSFER = `${API_TRANSACTION_HOST}/transaction/newTransfer`;
export const PUT_RECHARGE = `${API_TRANSACTION_HOST}/transaction/transfer/recharge`; //#cvu
export const GET_TRANSACTIONS = `${API_TRANSACTION_HOST}/transaction/all`; //:dataId

//Fetchs asociadas a User
export const POST_ACCOUNT = `${API_TRANSACTION_HOST}/transaction/account`; //:dataId
export const GET_ACCOUNTS = `${API_TRANSACTION_HOST}/transaction/account`;
export const GET_ACCOUNT_BY_ID = `${API_TRANSACTION_HOST}/transaction/account`; //:dataId
export const PUT_ACCOUNT_BY_ID = `${API_TRANSACTION_HOST}/transaction/account`; //:dataId #dataForm
export const GET_BALANCE_BY_ID = `${API_TRANSACTION_HOST}/transaction/account/balance`; //:dataId
