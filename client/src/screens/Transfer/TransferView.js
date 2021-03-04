import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { Surface, IconButton } from 'react-native-paper';
import { Text, Button } from '../../components';
import styles from './styles';
import { validations, REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';
import TransferSvg from '../../media/TransferSvg.js';

const darkColor = palette.accent.dark;

const textInputs = [
  {
    name: 'cvu',
    placeholder: 'CVU',
    error: 'CVU invalido',
    maxLength: 22,
    minLength: 22,
    required: true
  },
  {
    name: 'message',
    placeholder: 'Enviar Mensaje',
    required: false
  }
];

const cashInput = [];

export default function TransferView({ handleFinalSubmit, navigation }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => handleFinalSubmit(data);
  return (
    <View style={[styles.content, { flex: 1 }]}>
      <TransferSvg style={styles.imgTransfer} />
      <View style={styles.textInputs}>
        <Controller
          name="cash"
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Ingresar Saldo'
            },
            pattern: {
              value: 'd*',
              message: 'Saldo Invalido'
            }
          }}
          render={({ onChange, value }) => (
            <TextInput
              placeholder="0"
              style={[styles.cash, styles.text]}
              placeholderTextColor={rgba(darkColor, 0.5)}
              underlineColorAndroid="transparent"
              onChangeText={onChange}
              value={value}
              onPress={() => console.log(errors)}
            />
          )}
        />
        {errors.cash ? (
          <>
            <Text
              text={errors.cash.message}
              type="body3"
              style={styles.helperText}
            />
          </>
        ) : (
          <View id="name"></View>
        )}
      </View>

      <View style={styles.textInputs}>
        {textInputs.map((e, index) => (
          <View key={index}>
            <Controller
              name={e.name}
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: e.required,
                  message: 'Campo requerido'
                },
                pattern: {
                  value: e.pattern,
                  message: `${e.error}`
                },
                maxLength: {
                  value: e.maxLength || 50,
                  message:
                    (e.maxLength && `Caracteres maximos ${e.maxLength}`) || ''
                },
                minLength: {
                  value: e.minLength || 1,
                  message:
                    (e.maxLength && `Caracteres minimos ${e.minLength}`) || ''
                }
              }}
              render={({ onChange, value }) => (
                <TextInput
                  placeholder={e.placeholder}
                  secureTextEntry={e.type === 'password' ? true : false}
                  maxLength={!e.maxLength ? e.maxLength : 50}
                  style={[fontSystem.body1, styles.text]}
                  placeholderTextColor={rgba(darkColor, 0.5)}
                  underlineColorAndroid="transparent"
                  onChangeText={onChange}
                  value={value}
                  onPress={() => console.log(errors)}
                />
              )}
            />
            {errors[e.name] ? (
              <>
                <View
                  id="name"
                  style={[styles.underlineBlur, styles.underlineError]}
                ></View>
                <Text
                  text={errors?.[e.name]?.message}
                  type="body3"
                  style={styles.helperText}
                />
              </>
            ) : (
              <View id="name" style={[styles.underlineBlur]}></View>
            )}
          </View>
        ))}
      </View>

      <Button
        label="enviar"
        color="primary"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
