import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

interface Props {
  isCart?: boolean;
}

export function WithGoBackHeader({ isCart }: Props) {
  const { back, canGoBack, navigate } = useRouter();

  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity onPress={() => canGoBack() && back()}>
        <Image source={require('assets/icons/back.png')} className="size-7" />
      </TouchableOpacity>
      <Image
        className="h-6 w-32"
        source={require('assets/icons/logo/header-logo.png')}
      />
      <View className="flex-row gap-1">
        {!isCart && (
          <TouchableOpacity onPress={() => navigate('/cart')}>
            <Image
              source={require('assets/icons/cart.png')}
              className="size-7"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
