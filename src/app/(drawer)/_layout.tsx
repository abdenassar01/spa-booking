import { Drawer } from 'expo-router/drawer';
import React from 'react';

import { DrawerContent } from '@/components/ui/common/drawer';

export default function TabLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="index" />
      <Drawer.Screen name="cart" />
      <Drawer.Screen name="explore" />
      <Drawer.Screen name="profile" />
      <Drawer.Screen name="salons" />
      <Drawer.Screen name="products" />
      <Drawer.Screen name="chat" />
    </Drawer>
  );
}
