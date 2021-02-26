import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button ,useTheme} from "react-native-paper";

 const Register2 = () => {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const {colors} = useTheme()
  return (
<View>
    <View>
    <Text style={{color:colors.primary}}>Datos personales</Text>
    </View>
        <View>
        <Controller
            control={control}
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
