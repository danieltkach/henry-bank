export const API_USER_HOST = 'http://localhost:4001';
// export const API_TRANSACTION_HOST = 'http://localhost:4001';
export const CLIENT_HOST = 'http://localhost:19002';

//Fetchs asociadas a User
export const POST_REGISTER_USER = `${API_USER_HOST}/user/signup`;//#dataForm
export const POST_LOGIN_USER = `${API_USER_HOST}/user/login`;//#dataForm
export const PUT_USER = `${API_USER_HOST}/user/update`;//:dataId & dataForm
export const GET_USER_BY_ID = `${API_USER_HOST}/user`;//:dataId
export const GET_USERS = `${API_USER_HOST}/user`;
export const GET_ADDRESS = `${API_USER_HOST}/address`;//?direccion=:queryData
