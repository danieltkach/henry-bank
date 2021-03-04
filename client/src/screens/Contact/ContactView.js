import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomNav, Header, Background,Button,Drawer,Avatar} from '../../components';
import { readUsersFetch } from "../../controllers/user";

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
  
  
  const ContactView = ({navigation,data}) => {
    console.log(data,"data")
    return (
     <View>
       <Drawer/>
       {DATA.map((d,key) => (
         <View>
         <Avatar key={key} title={d.alias} subtitle={d.title} />
         </View>
       ))}
     </View>
    );
  };
  
  
export default ContactView;

  