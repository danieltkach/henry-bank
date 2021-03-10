import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles';
import data from './data';

export default function TrasactionView({ transactions }) {
  // console.log('====================================');
  // console.log(transactions);
  // console.log(transactions[0]);
  // console.log(transactions[0][0][0]);
  // console.log('====================================');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
      }}
    >
      <IconButton icon="bank-transfer" color="black" size={40} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text>{item.transactionType}</Text>
        <Text>{item.date}</Text>
      </View>
      <View
        style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}
      >
        <Text
          style={{
            color: item.transactionType == 'recharge' ? 'green' : 'red'
          }}
        >
          {item.amount} {item.currency}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.content, { flex: 1 }]}>
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        // scrollEnabled={false}
        data={transactions}
        keyExtractor={(item) => `${item._id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ width: '100%', height: 1, backgroundColor: 'gray' }}
            ></View>
          );
        }}
      />
    </View>
  );
}
