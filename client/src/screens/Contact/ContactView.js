import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomNav, Header, Background,Button,Drawer} from '../../components';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      alias:"dani",
      title: "dani@gmail",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      alias:"eze",
      title: "eze@gmail",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      alias:"gian",
      title: "gian@gmail",
    },
  ];
  
  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
       <View style={{height:5}} >
       <Text style={styles.alias}>{item.alias}</Text>
       <Text style={styles.title}> {item.title} </Text>
       </View>
       <View style={{alignItems:"flex-end"}}>
       <Button size={24} type="icon" icon="trash-can" />
       </View>
    </TouchableOpacity>
  );
  
  const ContactView = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);
  
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          style={{ backgroundColor }}
        />
      );
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <Background />  
        <Drawer/>
        <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        </View>
        <BottomNav navigation={navigation}/>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container          : {
      flex             : 1,
      paddingHorizontal: '16px',
      flexDirection    : 'row',
      flexWrap         : 'wrap',
      marginTop        : 40
    },
    item: {
      height:48,
      marginVertical: 8,
    },
    title: {
      fontSize: 15,
    },
    alias:{
      marginHorizontal:4,
      fontSize: 20,
      marginBottom:5
    }
  });

export default ContactView;

  