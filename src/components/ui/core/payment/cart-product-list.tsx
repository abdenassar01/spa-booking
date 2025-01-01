import React from 'react';
import { Text, View } from 'react-native';

import { CartProductCard } from './cart-product-card';

const products = [
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
];

export function CartProductList() {
  return (
    <View className="w-full rounded-xl bg-border p-3">
      <Text className="text-sm font-medium">Détails des produit</Text>
      <View className="mt-2 flex-row flex-wrap gap-2">
        {React.Children.toArray(
          products.map((item) => <CartProductCard product={item} />)
        )}
      </View>
    </View>
  );
}
