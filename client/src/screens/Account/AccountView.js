import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import styles from './styles';
import { palette } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button } from '../../components';


export default function AccountView({ navigation, account, user }) {

  return (
    <View style={{flex: 1, paddingVertical: 8}}>

      <LinearGradient colors={[palette.primary.light, palette.secondary.light]} style={styles.surface} >
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
            <Text type='subtitle2' text='Nombre del banco' color='disabled' />
          </View>
          <View>
            <Text type='title' text='CVU:' />
            <Text type='title' text={account.cvu} />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text type='subtitle2' text='mi nombre' color='disabled' />
            <View style={styles.symbol}>
              <View style={[styles.circle, {left: 8}]}></View>
              <View style={[styles.circle, {right: 8}]}></View>
            </View>
          </View>
        </View>
      </LinearGradient>




    </View>
  );
};
