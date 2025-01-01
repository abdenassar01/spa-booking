import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Modal, useModal } from '@/components/ui/common';
import { cn } from '@/lib/helpers';

export function Livraison() {
  const { present, ref, dismiss } = useModal();
  const options = ['Livraison Rapide', 'Livraison Gratuit'];
  return (
    <>
      <TouchableOpacity
        className="flex-row items-center gap-2 rounded-full border border-[#D9D9D9] p-2 px-3.5"
        onPress={present}
      >
        <Text className="text-xs">Livraison</Text>
        <MaterialIcons name="keyboard-arrow-down" size={12} color="black" />
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
