import { Entypo } from '@expo/vector-icons';
import colors from 'configs/colors';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  product: {
    image: string;
    price: number;
    qte: number;
  };
}

export function CartProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(product.qte);
  return (
    <View>
      <Image className="size-20 rounded-xl" source={{ uri: product.image }} />
      <Text className="my-0.5 text-[10px] font-semibold">
        {product.price}Dhs
      </Text>

      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => setQuantity((old) => (old !== 1 ? old - 1 : old))}
          className="rounded bg-secondary p-1.5"
        >
          <Entypo name="minus" size={8} color={colors.primary} />
        </TouchableOpacity>

        <Text className="text-[8px] font-medium text-primary">{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity((old) => (old !== 20 ? old + 1 : old))}
          className="rounded bg-secondary p-1.5"
        >
          <Entypo name="plus" size={8} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
