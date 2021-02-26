import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { TextInput, Button ,useTheme} from "react-native-paper";
import { verifyUserFetch } from './../controllers/user'


export const TokenScreen = ({navigation}) => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(data);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:4001/user/verify_token", requestOptions)
          .then(response => response)
          .then(result => {
              if(result.status == 200){
                navigation.navigate('Register1')
              }
            }
          )
          .catch(error => console.log('error', error));
    }



    return (
        <View>
            <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Token"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="token"
            rules={{ required: true }}
            defaultValue=""
        />
        <Button
        onPress={handleSubmit(onSubmit)}>
            Ingresar
        </Button>
        </View>
    )
}
export default TokenScreen;