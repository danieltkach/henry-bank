import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { Button } from '../../components';
import { REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';
import styles from './styles';
import Deposit from '../../media/Deposit';

const darkColor = palette.accent.dark;

export default function DespositView({ handleFinalSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleFinalSubmit(data);
  };

  return (
    <View style={[styles.content, { flex: 1 }]}>
      <Deposit style={styles.imgDeposit} />
      <View style={styles.textInputs}>
        <Controller
          name="amount"
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Campo requerido'
            },
            pattern: {
              value: REGEX.AMOUNT,
              message: 'Solo acepto números'
            }
          }}
          render={({ onChange, value }) => (
            <TextInput
              placeholder="Monto a recargar..."
              //            maxLength={!e.maxLength ? e.maxLength : 50}
              style={[styles.cash, styles.text]}
              placeholderTextColor={rgba(darkColor, 0.5)}
              underlineColorAndroid="transparent"
              onChangeText={onChange}
              value={value}
              onPress={() => console.log(errors)}
            />
          )}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          label="Confirmar recarga"
          color="primary"
          style={styles.button}
        />
      </View>
    </View>
  );
}
