import { AntDesign } from '@expo/vector-icons';
import colors from 'configs/colors';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { CartItemsList, RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function Cart() {
  const { height } = Dimensions.get('window');
  return (
    <RootWrapper className="container">
      <WithGoBackHeader isCart />
      <ScrollView className="mt-3" style={{ height: height - 170 }}>
        <CartItemsList />
      </ScrollView>
      <View className="border-t border-border pt-3">
        <View className="container flex-row items-center justify-between gap-5">
          <View>
            <Text className="text-sm font-medium text-gray">Total prix</Text>
            <Text className="text-lg font-semibold">459 Dhs</Text>
          </View>
          <Link className="w-[70%]" href="/checkout">
            <View className="w-full items-center justify-center rounded-full bg-primary p-4">
              <Text className="font-medium text-white">Paiement</Text>
              <AntDesign
                className="absolute right-3 top-4"
                name="arrowright"
                size={20}
                color={colors.white}
              />
            </View>
          </Link>
        </View>
      </View>
    </RootWrapper>
  );
}
