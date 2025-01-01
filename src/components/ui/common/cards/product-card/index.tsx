import colors from 'configs/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { cn, truncateString } from '@/lib/helpers';

interface Props {
  product: {
    id: number;
    category: {
      id: number;
      name: string;
      icon: React.JSX.Element;
    };
    name: string;
    reduction: number;
    price: number;
    image: string;
  };
  className?: string;
}

export function ProductCard({ product, className }: Props) {
  const { push } = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        push({
          pathname: `/products/[id]`,
          params: { id: product.id },
        })
      }
      style={{ backgroundColor: `${colors.secondary}35` }}
      className={cn('w-[97%] rounded-xl p-2', className)}
    >
      <Image
        className="aspect-square w-full rounded-lg"
        source={{ uri: product.image }}
      />
      <TouchableOpacity
        onPress={() =>
          push({
            pathname: '/products',
            params: { category: product.category.id },
          })
        }
        className="my-2 w-32 flex-row items-center justify-center gap-1.5 rounded-full bg-secondary py-1"
      >
        {product.category.icon}
        <Text className="text-[8px] text-primary">{product.category.name}</Text>
      </TouchableOpacity>

      <Text className="text-xxs my-2 text-[Poppins]">
        {truncateString(product.name, 35)}
      </Text>
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-bold">
          {product.price - product.price * (product.reduction / 100)}Dhs
        </Text>
        <Text className="text-xs text-gray line-through">
          {product.price}Dhs
        </Text>
        <Text className="rounded bg-secondary p-1 text-[9px] text-primary">{`-${product.reduction}%`}</Text>
      </View>
    </TouchableOpacity>
  );
}
