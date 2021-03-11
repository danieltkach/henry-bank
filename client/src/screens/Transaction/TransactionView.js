import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Animated } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { Text } from '../../components/';

export default function TrasactionView({ transactions }) {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.View style={{ flex: 1 }}>
      <Animated.FlatList
        style={{ height: 100, paddingBottom: 64 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          marginTop: 10
        }}
        // scrollEnabled={false}
        data={transactions}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, 70 * index, 70 * (index + 2)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
          });
          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 8,
                padding: 16,

                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.3,
                //shadowRadius: 4.65,
                elevation: 4,
                transform: [{ scale }]
              }}
            >
              <IconButton
                icon={
                  item.transactionType === 'transfer'
                    ? 'subdirectory-arrow-right'
                    : 'arrow-collapse-up'
                }
                color="black"
                size={24}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'space-around',
                  justifyContent: 'space-around',
                  height: '100%'
                }}
              >
                {item.idSenderAccount === 'RapiPago' ? (
                  <Text text={item.idSenderAccount} type="subtitle2" />
                ) : (
                  <Text
                    text={`CVU ${item.idReceiverAccount}`}
                    type="subtitle2"
                  />
                )}

                <Text
                  text={item.date.substr(0, 10)}
                  type="body3"
                  color="disabled"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: '100%',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: item.transactionType == 'recharge' ? 'green' : 'red'
                  }}
                  text={item.amount}
                  type="subtitle1"
                />
                <Text
                  style={{
                    color: item.transactionType == 'recharge' ? 'green' : 'red'
                  }}
                  text={item.currency}
                  type="subtitle2"
                />
              </View>
            </Animated.View>
          );
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return <View style={{ width: '100%', height: 1 }}></View>;
        }}
      />
    </Animated.View>
  );
}
