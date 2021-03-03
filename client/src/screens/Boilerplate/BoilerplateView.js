import React from "react";
import { View } from "react-native";
import { Avatar } from '../../components';
import styles from './styles';


export default function BoilerplateView() {
  return (
    <View style={{flex: 1}}>
      <Avatar title='El pepe' subtitle='elpepe@gmail.com' icon='trash-can'/>
    </View>
  );
};
