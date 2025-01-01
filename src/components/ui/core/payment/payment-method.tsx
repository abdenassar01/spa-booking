import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib/helpers';

const methods = [
  {
    id: 1,
    icon: require('assets/icons/MasterCard.png'),
    label: '5321 58****** 5478',
  },
  {
    id: 2,
    icon: require('assets/icons/Cash.png'),
    label: 'Paiement à la livraison',
  },
  {
    id: 3,
    icon: require('assets/icons/Magnetic Card.png'),
    label: 'Ajouter une nouvelle carte',
    isNew: true,
  },
];

export function PaymentMethod() {
  const [selected, setSelected] = useState<number>(methods[0].id);

  return (
    <View className="w-full rounded-xl bg-border p-3">
      <Text className="text-sm font-medium">Méthode de paiment</Text>
      <View className="mt-2 gap-1">
        {React.Children.toArray(
          methods.map((item) => (
            <>
              <TouchableOpacity
                onPress={() => setSelected(item.id)}
                className="flex-row items-center gap-1"
              >
                <View
                  className={cn(
                    'size-[18px] bg-white justify-center items-center rounded-full border ',
                    item.id === selected
                      ? 'bg-primary border-primary'
                      : 'border-[#D9D9D9]'
                  )}
                >
                  {item.id === selected && (
                    <View className="size-3 rounded-full bg-white" />
                  )}
                </View>
                <Image className="size-[18px]" source={item.icon} />
                <Text className="text-[10px]">{item.label}</Text>
              </TouchableOpacity>
              {item.isNew && (
                <View className="-mt-2 ml-6 flex-row">
                  <Image
                    className="size-[18px]"
                    source={require('assets/icons/MasterCard.png')}
                  />
                  <Image
                    className="size-[18px]"
                    source={require('assets/icons/Visa.png')}
                  />
                </View>
              )}
            </>
          ))
        )}
      </View>
    </View>
  );
}
