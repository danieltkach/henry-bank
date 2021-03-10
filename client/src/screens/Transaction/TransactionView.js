import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

export default function TrasactionView({ transactions }) {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.View style={{ flex: 1 }}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          marginTop: 10,
          paddingTop: StatusBar.currentHeight || 42
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
                paddingVertical: 10,
                padding: 20,
                marginBottom: 20,
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10
                },
                shadowOpacity: 1,
                shadowRadius: 20,
                transform: [{ scale }]
              }}
            >
              <IconButton icon="bank-transfer" color="black" size={40} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text>{item.idSenderAccount}</Text>
                <Text>{item.transactionType}</Text>
                <Text>{item.date}</Text>
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
                >
                  {item.amount} {item.currency}
                </Text>
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
