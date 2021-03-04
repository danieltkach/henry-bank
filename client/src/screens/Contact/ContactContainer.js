import React,{useState,useEffect} from "react";
import { View, SafeAreaView } from "react-native";
import { Background } from '../../components';
import { loginUserFetch } from '../../controllers/user';
import { addSession } from '../../stores/userStore/userActions';
import { useDispatch } from 'react-redux';
import ContactView from "./ContactView";
import { readUsersFetch } from "../../controllers/user";


 const ContactContainer = () => {

  const [users,Setusers] = useState([
  ])
var info;
console.log(info)

 const prueba = ()=>{
   readUsersFetch()
  .then(r =>{
    console.log(r,"esto es la respuesta")
    r.map(e=>{
      console.log(e.contactsAlias)
    return Setusers(e.contactsAlias)   
    })
  })

}
  
  useEffect(()=>prueba(),[])

    return (
        <SafeAreaView style={{flex: 1}}>
        <Background />
        <View>
          <ContactView data={users}/>
        </View>
      </SafeAreaView>
    )
}
export default ContactContainer;