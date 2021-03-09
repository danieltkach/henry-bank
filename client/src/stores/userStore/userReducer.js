import { AsyncStorage } from 'react-native';
import { ADD_SESSION, REMOVE_SESSION, ADD_CONTACT,DELETE_CONTACT} from "./userActions";


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

    case ADD_CONTACT :{
      // if(state.user.contactsAlias.find(item => item.email === action.payload.email)){
      //   return {
      //     ...state.user
      //   }
      // }
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