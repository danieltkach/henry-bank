export const API_USER_HOST = 'http://localhost:4001';
export const API_TRANSACTION_HOST = 'http://localhost:4002';
export const CLIENT_HOST = 'http://localhost:19002';

//Fetchs asociadas a User
export const POST_REGISTER_USER = `${API_USER_HOST}/user/signup`;//#dataForm
export const POST_LOGIN_USER = `${API_USER_HOST}/user/login`;//#dataForm
export const PUT_USER = `${API_USER_HOST}/user/update`;//:dataId & dataForm
export const GET_USER_BY_ID = `${API_USER_HOST}/user`;//:dataId
export const GET_USERS = `${API_USER_HOST}/user`;
export const GET_ADDRESS = `${API_USER_HOST}/user/address`;//?direccion=:queryData
export const GET_VERIFY = `${API_USER_HOST}/user/verify_token`;//:token


//Fetchs asociadas a Transactions
export const GET_TRANSFER_SENDED = `${API_TRANSACTION_HOST}/transaction/transfers`;//:dataId
export const GET_TRANSFER_INCOME = `${API_TRANSACTION_HOST}/transaction/incomes`;//:dataId
export const POST_TRANSFER = `${API_TRANSACTION_HOST}/transaction/transfer`; //#dataForm

//Fetchs asociadas a User
export const POST_ACCOUNT = `${API_TRANSACTION_HOST}/account`;//:dataId
export const GET_ACCOUNTS = `${API_TRANSACTION_HOST}/account/accounts`;
export const GET_ACCOUNT_BY_ID = `${API_TRANSACTION_HOST}/account`; //:dataId
export const PUT_ACCOUNT_BY_ID = `${API_TRANSACTION_HOST}/account`; //:dataId #dataForm
// export const GET_BALANCE = `${API_TRANSACTION_HOST}/account`; //:dataId
