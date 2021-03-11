import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Background, BottomNav, Button, Header } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import ContactView from './ContactView';
import {
  addContactFetch,
  deleteContactFetch,
  readUserByIdFetch,
  readUsersFetch
} from '../../controllers/user';
import { palette, rgba } from '../../theme';
import { addContactAction } from '../../stores/userStore/userActions';


const ContactContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userReducer.user._id);
  const contacts = useSelector(state => state.userReducer.contacts)
  
  const [users, Setusers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const addContact = (userId,dataForm) => {
    console.log(userId,dataForm,"front")
    dispatch(addContactAction(userId,dataForm))
    handleClick()
  };
  const deleteContact = (userId, dataForm) => {
    deleteContactFetch(userId, dataForm)
      .then((response) => {
        dispatch({type: "DELETE_CONTACT", payload:dataForm.contactEmail})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetch = () =>
    readUserByIdFetch(userId).then((r) => {
      Setusers(...users, r.contactsAlias);
    });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      {users ? (
        <ContactView
          toggle={toggle}
          handleClick={handleClick}
          data={users}
          deleteContact={deleteContact}
          addContact={addContact}
          navigation={navigation}
        />
      ) : (
        <>
          <Text>NO TENES CONTACTO</Text>
        </>
      )}

      <Button
        style={styles.icono}
        label="A"
        type="icon"
        onPress={handleClick}
        icon="account-multiple-plus"
      ></Button>
      <BottomNav navigation={navigation} init={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icono: {
    bottom: 60,
    position: 'absolute',
    height: 48,
    width: 48,
    borderRadius: 40,
    right: 9,
    zIndex: 1
  }
});
export default ContactContainer;
