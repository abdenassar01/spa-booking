import { MaterialIcons } from '@expo/vector-icons';
import colors from 'configs/colors';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Modal, useModal } from '@/components/ui/common';
import { cn } from '@/lib/helpers';

export function DeliveryMode() {
  const { present, ref, dismiss } = useModal();
  const options = ['Livraison Rapide', 'Livraison Gratuit'];
  return (
    <>
      <TouchableOpacity
        onPress={present}
        className="w-full flex-row items-center justify-between rounded-xl bg-border p-3"
      >
        <View className="">
          <Text className="text-sm font-medium">Mode de livrasion</Text>
          <Text className="text-[10px] text-primary">
            Frais de livrason: Livrason gratuite
          </Text>
          <Text className=" text-[8px]">
            Date de livraison estimée entre le jun 01- 3
          </Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={20}
          color={colors.black}
        />
      </TouchableOpacity>
      <Modal ref={ref} snapPoints={['20%', '30%']}>
        <ScrollView className="container">
          {options.map((item, index) => (
            <TouchableOpacity
              className={cn(
                'py-2 border-border',
                index !== options.length - 1 ? 'border-b' : ''
              )}
              onPress={dismiss}
              key={item}
            >
              <View className="flex-row items-center gap-2 p-2">
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Modal>
    </>
  );
}
