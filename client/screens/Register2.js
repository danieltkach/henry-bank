import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button ,useTheme} from "react-native-paper";
import { updateUserFetch } from '../controllers/user';

 const Register2 = ({ navigation, route  }) => {
  const { control, handleSubmit, errors } = useForm();
  console.log("soy el route", route);
  const { userId, dataInitial  } = route.params;
  const onSubmit = data => {
  const dataForm = {...dataInitial, ...data}
  
  
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("dataformmmm", dataForm);
    var raw = JSON.stringify(dataForm);

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    console.log("soy el id", userId)
    fetch(`http://192.168.0.60:4001/user/${userId}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        navigation.navigate('LoginScreen');
    })
    .catch(error => console.log('error', error));
    };
    const {colors} = useTheme()
  return (
<View>
    <View>
    <Text style={{color:colors.primary}}>Datos personales</Text>
    </View>
        <View>
        <Controller
            control={control}t
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="País"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="País"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.País && <Text style={{color:"red"}}>This is required.</Text>}

        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Provincia"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="Provincia"
            defaultValue=""
        />
        {errors.Provincia && <Text style={{color:"red"}}>This is required.</Text>}

        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Localidad"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="Localidad"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.Localidad && <Text style={{color:"red"}}>This is required.</Text>}
        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Domicilio"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="Domicilio"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.Domicilio && <Text style={{color:"red"}}>This is required.</Text>}
        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Altura"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="Altura"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.Altura  && <Text style={{color:"red"}}>This is required.</Text>}
        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Telefono"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="Telefono"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.Telefono && <Text style={{color:"red"}}>This is required.</Text>}

        <Button onPress={handleSubmit(onSubmit)}>Crear Cuenta</Button>
        </View>
</View>

  );
}

export default Register2;
