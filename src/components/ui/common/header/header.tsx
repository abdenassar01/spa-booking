import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export function Header() {
  const { dispatch } = useNavigation();
  const { navigate } = useRouter();
  return (
    <View className="w-full flex-row items-center justify-between">
      <TouchableOpacity onPress={() => dispatch({ type: 'TOGGLE_DRAWER' })}>
        <Image source={require('assets/icons/menu.png')} className="size-7" />
      </TouchableOpacity>
      <Image
        className="h-6 w-32"
        source={require('assets/icons/logo/header-logo.png')}
      />
      <View className="flex-row gap-1">
        <TouchableOpacity onPress={() => navigate('/cart')}>
          <Image source={require('assets/icons/cart.png')} className="size-7" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
