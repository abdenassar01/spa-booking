import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib/helpers';

import { SalonProductCard } from './salon-product-card';

const salons = [
  {
    id: 1,
    name: 'BEAUTY CONCEPT ',
    products: [
      {
        image: 'https://imgur.com/HhsDDkk.png',
        price: 150,
        qte: 1,
      },
      {
        image: 'https://imgur.com/TjRqxDq.png',
        price: 120,
        qte: 1,
      },
      {
        image: 'https://imgur.com/Ym11yy5.png',
        price: 200,
        qte: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'ALMA BEAUTY SALON',
    products: [
      {
        image: 'https://imgur.com/HhsDDkk.png',
        price: 150,
        qte: 1,
      },
      {
        image: 'https://imgur.com/TjRqxDq.png',
        price: 120,
        qte: 1,
      },
      {
        image: 'https://imgur.com/Ym11yy5.png',
        price: 200,
        qte: 1,
      },
    ],
  },
];
export function CartItemsList() {
  const [selected, setSelected] = useState<number>();

  return (
    <View>
      <View className="gap-2">
        {React.Children.toArray(
          salons.map((item) => (
            <View>
              <TouchableOpacity
                onPress={() => setSelected(item.id)}
                className="my-2 flex-row items-center gap-1"
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
                <FontAwesome5 name="store" size={14} color="#848484" />
                <Text className="text-[10px]">{item.name}</Text>
              </TouchableOpacity>
              <View className="mb-2 h-px w-full rounded-full bg-border" />
              <View className="gap-2">
                {item.products.map((product) => (
                  <SalonProductCard key={product.image} product={product} />
                ))}
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
}
