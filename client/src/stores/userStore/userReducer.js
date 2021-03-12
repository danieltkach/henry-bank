import { AsyncStorage } from 'react-native';
import { ADD_SESSION, REMOVE_SESSION, ADD_CONTACT,DELETE_CONTACT, PUT_PROFILE} from "./userActions";


const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SESSION:
      return {...state, user: action.payload && action.payload || {}};
      break;

    case REMOVE_SESSION:
      return {};
      break;

    case PUT_PROFILE:
      return {
        user: {
          ...state.user,
          cellphone: action.payload.cellphone,
          streetName: action.payload.streetName,
          streetNumber: action.payload.streetNumber,
          city: action.payload.city,
          country: action.payload.country,
          zipCode: action.payload.zipCode
        }
      }
    break;

    case ADD_CONTACT :{
      return{ 
        user:{
            ...state.user, contactsAlias: state.user.contactsAlias.concat(action.payload)
          }
      }
      break;
      }

    case DELETE_CONTACT :{
      return{
        user:{
            ...state.user, contactsAlias: state.user.contactsAlias.filter(item => item.email !== action.payload)
          }
      }
      break;
      }

    default:
      return state;
  }
};

export default userReducer;
//
