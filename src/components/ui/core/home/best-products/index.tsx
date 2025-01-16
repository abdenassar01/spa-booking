import { FontAwesome5 } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import colors from 'configs/colors';
import React from 'react';
import { View } from 'react-native';

import { ProductCard } from '@/components/ui/common';
const products = [
  {
    id: 1,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',
      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 150,
    reduction: 20,
    image: 'https://imgur.com/TjRqxDq.png',
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',

      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 170,
    reduction: 15,
    image: 'https://imgur.com/HhsDDkk.png',
  },
  {
    id: 3,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',
      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 210,
    reduction: 22,

    image: 'https://imgur.com/Ym11yy5.png',
  },
  {
    id: 4,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',
      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 100,
    reduction: 20,

    image: 'https://imgur.com/TjRqxDq.png',
  },
  {
    id: 5,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',
      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 90,
    reduction: 18,

    image: 'https://imgur.com/Ym11yy5.png',
  },
  {
    id: 6,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',
      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 170,
    reduction: 35,
    image: 'https://imgur.com/TjRqxDq.png',
  },
  {
    id: 7,
    category: {
      id: 1,
      name: 'BEAUTY CONCEPT',
      icon: <FontAwesome5 name="store" size={10} color={colors.primary} />,
    },
    name: 'Doux visage créme nettoyante veloutee 200ml',
    price: 150,
    reduction: 22,
    image: 'https://imgur.com/HhsDDkk.png',
  },
];

export function BestProductsSection() {
  return (
    <View className="pb-20">
      <FlashList
        estimatedItemSize={20}
        contentContainerClassName="mt-2"
        ItemSeparatorComponent={() => <View className="h-3" />}
        keyExtractor={(item) => `product-item-${item.id.toString()}`}
        numColumns={2}
        data={products}
        renderItem={({ item, index }) => (
          <ProductCard
            className={index % 2 === 0 ? '' : 'ml-[2%]'}
            product={item}
          />
        )}
      />
    </View>
  );
}
