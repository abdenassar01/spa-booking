import React from 'react';
import { Text, View } from 'react-native';

export function CartSummary() {
  return (
    <View className="w-full rounded-xl bg-border p-3">
      <Text className="text-sm font-medium">Resumé</Text>
      <View className="mt-3 rounded-lg bg-backgroundSecondary p-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-gray">Total</Text>
          <Text className="text-sm text-gray">150 Dhs</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-gray">Frais de livraison</Text>
          <Text className="text-sm text-gray">30 Dhs</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-gray">Taxes et autres frais</Text>
          <Text className="text-sm text-gray">18 Dhs</Text>
        </View>
        <View className="my-2 h-px w-full rounded-full bg-border" />
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-medium">Total</Text>
          <Text className="text-sm font-medium">459 Dhs</Text>
        </View>
      </View>
    </View>
  );
}
