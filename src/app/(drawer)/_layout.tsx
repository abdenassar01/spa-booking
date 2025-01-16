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
      <Drawer.Screen name="profile/index" />
      <Drawer.Screen name="profile/address" />
      <Drawer.Screen name="products/index" />
      <Drawer.Screen name="products/[id]" />
      <Drawer.Screen name="orders" />
      <Drawer.Screen name="chat" />
    </Drawer>
  );
}
