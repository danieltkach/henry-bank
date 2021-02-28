import React from "react";
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      openByDefault
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '100%' }}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Feed" component={} />
      <Drawer.Screen name="Article" component={} />
    </Drawer.Navigator>
  );
}
