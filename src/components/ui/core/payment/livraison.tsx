import { MaterialIcons } from '@expo/vector-icons';
import colors from 'configs/colors';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import { DeliveryMode } from './delivery-mode';

export function PaymentLivraisonSection() {
  return (
    <View className="gap-2.5">
      <Link href="/profile/address" className="w-full">
        <View className="w-full flex-row items-center justify-between rounded-xl bg-border p-3">
          <View className="">
            <Text className="text-sm font-medium">Adresse de livrasion</Text>
            <Text className="text-[10px] ">Full name +212 640654794</Text>
            <Text className="w-4/5 text-[10px]">
              Elm Street, Suite 3, Los Angeles, CA 90001, USA
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color={colors.black}
          />
        </View>
      </Link>
      <DeliveryMode />
    </View>
  );
}
