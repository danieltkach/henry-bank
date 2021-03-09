import React, { useEffect, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { palette, rgba } from '../theme';
import { Text } from './index';
import { useDispatch } from 'react-redux';
import { deleteData } from '../controllers/storage';

const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;

export default function AlertCustom({ label, type, state, handleAlert }) {
  const [toggle, setToggle] = useState();

  const alerts = {
    error: { icon: 'alert-circle', color: '#DD3C31', colorText: '#FAB3AE', colorBack: '#180605' } ,
    warning: { icon: 'alert', color: '#E78A00', colorText: '#FFD599', colorBack: '#190F00' },
    info: { icon: 'information', color: '#1D88DC', colorText: '#A6D5FA', colorBack: '#030E18' },
    success: { icon: 'check-circle', color: '#449E48', colorText: '#B7DFB9', colorBack: '#071107' }
  }

  const handleButton = (e) => {
    console.log(e)
    handleAlert();
  }

  return (
    <View style={styles.drawer}>

      <View
        style={[
          styles.navbar,
          { backgroundColor: type ? alerts[type].colorBack : 'gray' , top: (state ? 0 : -48) }
        ]}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon={type ? alerts[type].icon : 'account-alert'} size={24} color={type ? alerts[type].color : 'black'} />
          <Text text={label} type='subtitle1' color={type ? alerts[type].colorText : 'black'}/>
        </View>
        <IconButton
          icon="close"
          size={24}
          color={type ? alerts[type].colorText : 'black'}
          onPress={handleButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer  : {
    zIndex: 9999
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    height: 48,
    top: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    transition: '.3s'
  },
  backNav: {
    position: 'absolute',
    backgroundColor: `${darkColor}`,
    opacity: 0.5,
    transition: '.5s'
  }
});
