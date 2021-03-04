import React,{useState,useEffect} from "react";
import { View, SafeAreaView,StyleSheet,Text } from "react-native";
import {TextInput} from "react-native-paper"
import { Background,BottomNav,Button,Header} from '../../components';
import { useDispatch } from 'react-redux';
import ContactView from "./ContactView";
import { readUsersFetch } from "../../controllers/user";
import { palette, rgba } from "../../theme";


 const ContactContainer = ({navigation}) => {

  const [users,Setusers]  =  useState([])
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  const fetch = () =>
  readUsersFetch()
  .then(r =>{
    console.log(r,"esto es la respuesta")
    console.log(r[0].contactsAlias)
    Setusers(...users, r[0].contactsAlias)})
  
  useEffect(() =>{
    fetch()
  },[])

    return (
      <SafeAreaView style={{flex: 1}}>
        <Background />
          <ContactView toggle={toggle} handleClick={handleClick} data={users}/>
          <Button style={styles.icono} label="A" type="icon" onPress={handleClick} icon="account-multiple-plus"></Button>
          <BottomNav navigation={navigation} init={1}/>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  icono:{
      bottom        :60,
      position      :"absolute",
      height        :48,
      width         :48,
      borderRadius  :40,
      right         :9,
      zIndex        :1
  },
})
export default ContactContainer;