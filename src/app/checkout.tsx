import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import {
  PaymentLivraisonSection,
  RootWrapper,
  WithGoBackHeader,
} from '@/components/ui';

export default function Checkout() {
  const { height } = Dimensions.get('window');
  return (
    <RootWrapper className="container">
      <WithGoBackHeader isCart />
      <ScrollView className="mt-4" style={{ height: height - 170 }}>
        <PaymentLivraisonSection />
      </ScrollView>
      <View className="border-t border-border pt-3">
        <View className="container flex-row items-center justify-between gap-5">
          <View>
            <Text className="text-sm font-medium text-gray">Total prix</Text>
            <Text className="text-lg font-semibold">459 Dhs</Text>
          </View>
          <Link className="w-[70%]" href="/payment-success">
            <View className="w-full items-center justify-center rounded-full bg-primary p-4">
              <Text className="font-medium text-white">Commander</Text>
            </View>
          </Link>
        </View>
      </View>
    </RootWrapper>
  );
}
