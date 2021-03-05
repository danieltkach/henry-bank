import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";
import { BottomNav, Header, Background,Button,Drawer,Avatar} from '../../components';
import { readUsersFetch } from "../../controllers/user";
import { validations, REGEX } from '../../validations/index';
import { palette, rgba,fontSystem } from "../../theme";
import { useForm, Controller } from "react-hook-form"

const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;
const secondaryColor = palette.secondary.light
const textInputs = [
  {name: 'email', placeholder: 'Correo electrónico', type: 'email', error: 'Correo electrónico invalido', pattern: REGEX.EMAIL, }
];

  const ContactView = ({navigation,data,toggle,handleClick}) => {
    const { control, handleSubmit, errors } = useForm();
    console.log(data,"data")
    return (
     <View style={{flex:1}}>
       {toggle ? 
        <View style={[styles.index,{height:"58%"}]}>
          <View style={styles.texts}>
              <Text style={styles.text1}>Agregar Contacto</Text> 
              <Text style={styles.text2} >Asociar un contacto a tu perfil te permite poder realizar transferncias a otras cuentas dentro de INRO</Text>
          </View>
          <View style={{flex:1,justifyContent:"space-around"}}>

          <View style={styles.textInputs}>
            {textInputs.map((e, index) => (
              <View key={index}>
                <Controller
                  name={e.name}
                  defaultValue=""
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                    pattern: {
                      value: e.pattern,
                      message: `${e.error}`
                    },
                    maxLength: {
                      value: e.maxLength || 50,
                      message: e.maxLength && `Caracteres maximos ${e.maxLength}` || ''
                    },
                    minLength: {
                      value: e.minLength || 1,
                      message: e.maxLength && `Caracteres minimos ${e.minLength}` || ''
                    }
                  }}
                  render={({ onChange, value }) => (
                    <TextInput
                      placeholder={e.placeholder}
                      secureTextEntry={e.type === 'password' ? true : false}
                      maxLength={!e.maxLength ? e.maxLength : 50}
                      style={[fontSystem.body1, styles.text]}
                      placeholderTextColor="white"
                      underlineColorAndroid='transparent'
                      onChangeText={onChange}
                      value={value}
                      onPress={() => console.log(errors)}
                    />
                  )}
                />
                {errors[e.name] ?
                  (<>
                    <View id='name' style={[styles.underlineBlur, styles.underlineError]}></View>
                    <Text text={errors?.[e.name]?.message} type='body3' style={styles.helperText}/>
                  </>
                  ):(
                    <View id='name' style={[styles.underlineBlur]}></View>
                  )
                }
              </View>
              ))
            }
          </View>
            <Button 
              label="Agregar Contacto" 
              style={{backgroundColor:secondaryColor}} 
              type="button"
            >
              Agregar Usuario
            </Button>
            <Button 
              label="Cancelar" 
              style={{backgroundColor:darkColor}} 
              onPress={handleClick} 
              type="button"
            >
              Agregar Usuario
            </Button>
          </View>
          </View> : <Header type='settings' label='Contactos' align='center'/>

}
       {data.map((d,key) => (
         <View  key={key}>
         <Avatar title={d.alias} subtitle={d.email} />
         </View>
        ))}
          
     </View>
    );
  };
  const styles = StyleSheet.create({
  index:{
    paddingHorizontal       : 13,
    position                :"absolute",
    zIndex                  :1,
    top                     :0,
    width                   :"100%",
    backgroundColor         :primaryColor,
    borderBottomLeftRadius  :30,
    borderBottomRightRadius :30,
  },
  texts:{
    display         :"flex",
    alignItems      :"center",
    justifyContent  :"center",
  },

  text1:{
    color     :"white",
    padding   :30,
    fontSize  :24
    
  },
  text2:{
    paddingHorizontal :20,
    display           :"flex",
    justifyContent    :"center",
    alignItems        :"center",
    color             :"white",
    fontSize          :16,
  },

  textInputs      : {
    marginVertical: '2px',
    width         : '100%'
  },
  underlineBlur    : {
    position       : 'absolute',
    bottom         : '8px',
    width          : '100%',
    height         : '1px',
    backgroundColor: palette.text.disabled,
    opacity        : 0.8,
    // transition     : '.4s',
  },
  underlineFocus   : {
    height         : '2px',
    opacity        : 1,
    backgroundColor: palette.primary.main,
    // transition     : '.4s',
  },
  underlineError   : {
    height         : '2px',
    opacity        : 1,
    backgroundColor: 'red',
    // transition     : '.4s',
  },
  text             : {
    height         : 48,
    backgroundColor: 'transparent',
    marginTop      : '12px',
    color          : "white",
  },
  helperText  :{
    position  : 'absolute',
    right     : '0px',
    bottom    : '-8px',
    color     : 'red',
    // transition: '.3s'
  },
  })
export default ContactView;

  