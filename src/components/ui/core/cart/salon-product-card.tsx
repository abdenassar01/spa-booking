import { Entypo } from '@expo/vector-icons';
import colors from 'configs/colors';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { truncateString } from '@/lib/helpers';

interface Props {
  product: {
    image: string;
    price: number;
    qte: number;
  };
}

export function SalonProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(product.qte);
  return (
    <View className="flex-row justify-between">
      <View className="flex-row gap-1">
        <Image className="size-20 rounded-xl" source={{ uri: product.image }} />
        <View className="justify-between">
          <Text className="w-4/5 text-xs font-medium">
            {truncateString(
              "Trousse en velours promo fin d'année 2023, contenant something else",
              37
            )}
          </Text>
          <Link href="/products">
            <Text className="text-[10px] font-medium text-primary">
              Category
            </Text>
          </Link>
          <Text className="my-0.5 text-sm font-semibold">
            {product.price} Dhs
          </Text>
        </View>
      </View>

      <View className=" items-center justify-between">
        <TouchableOpacity
          onPress={() => setQuantity((old) => (old !== 20 ? old + 1 : old))}
          className="rounded bg-secondary p-1.5"
        >
          <Entypo name="plus" size={8} color={colors.primary} />
        </TouchableOpacity>
        <Text className="text-[8px] font-medium text-primary">{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity((old) => (old !== 1 ? old - 1 : old))}
          className="rounded bg-secondary p-1.5"
        >
          <Entypo name="minus" size={8} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
