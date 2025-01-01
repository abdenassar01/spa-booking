import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Modal, useModal } from '@/components/ui/common';
import { cn } from '@/lib/helpers';

export function QuantitySelector() {
  const { present, ref, dismiss } = useModal();
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selected, setSelected] = useState<number>(1);

  return (
    <>
      <TouchableOpacity
        className="mt-2 flex-row items-center justify-between rounded-lg border border-[#D9D9D9] p-3"
        onPress={present}
      >
        <Text className="text-sm font-medium">
          Quantité: <Text className="ml-3 text-black">{selected}</Text>
        </Text>
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
              onPress={() => {
                setSelected(item);
                dismiss();
              }}
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
