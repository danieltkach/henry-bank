import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MailScreen = () => {
    return (
        <View>
           <StatusBar style='dark' />
        <View style={styles.circuloNE}/>

        <View style={styles.circuloS}/>
        <View style={styles.circuloSE}/>

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
        {errors.email && <Text style={{color:"red"}}>Token requerido.</Text>}

        <Button onPress={() => navigation.navigate('RegisterScreen')}>
          CONTINUAR
        </Button>

        </View>

    )
}

export default MailScreen

const styles = StyleSheet.create({
 circuloNE: {
        position: "absolute",
        top: -350,
        right: -50,
        borderRadius: 400,
        backgroundColor: '#E52B2B',
        opacity:0.4 ,
        width: 400,
        height: 400,
    },
    circuloS: {
        position: "absolute",
        borderRadius: 200,
        backgroundColor: '#E52B2B',
        opacity:0.4 ,
        width: 250,
        height: 250,
        bottom: -190,
    },
    circuloSE: {
        position: "absolute",
        top: 700,
        right: -80,
        borderRadius: 100,
        backgroundColor: '#3551F2',
        opacity:0.4 ,
        width: 200,
        height: 200,
    }
    });
