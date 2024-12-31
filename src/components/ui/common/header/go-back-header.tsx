import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

export function WithGoBackHeader() {
  const { back, canGoBack, navigate } = useRouter();

  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity onPress={() => canGoBack() && back()}>
        <Image source={require('assets/icons/back.png')} className="size-7" />
      </TouchableOpacity>
      <View className="flex-row gap-4">
        <TouchableOpacity onPress={() => navigate('/cart')}>
          <Image source={require('assets/icons/cart.png')} className="size-7" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/explore')}>
          <Image
            source={require('assets/icons/explore.png')}
            className="size-7"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
