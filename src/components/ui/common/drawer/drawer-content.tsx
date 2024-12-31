import { type DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';

import { RootWrapper } from '../layout-helper';

export function DrawerContent({
  navigation: { closeDrawer, navigate },
  ...props
}: DrawerContentComponentProps) {
  return (
    <RootWrapper className="flex-1 bg-primary">
      <View className="">
        <View className="">
          <Text className="text-2xl text-white">Hello world</Text>
        </View>
      </View>
    </RootWrapper>
  );
}
