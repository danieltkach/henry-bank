import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { TextInput, Button ,useTheme} from "react-native-paper";
import { verifyUserFetch } from './../controllers/user'


export const TokenScreen = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        verifyUserFetch(data)
        .then(response =>{
            console.log(response)
        })
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