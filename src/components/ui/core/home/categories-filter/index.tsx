import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const categories = [
  { id: 1, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 2, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 3, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 4, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 5, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 6, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 7, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 8, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 9, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 10, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
];

export function CategoriesFilter() {
  const { push } = useRouter();
  return (
    <View className="flex-row flex-wrap justify-between">
      {categories.map((category) => (
        <TouchableOpacity
          onPress={() =>
            push({ pathname: '/products', params: { category: category.id } })
          }
          key={category.id}
          className="w-1/5 flex-col items-center gap-1.5 p-1"
        >
          <Image
            source={{ uri: category.icon }}
            className="size-10 rounded-full"
          />
          <Text className="text-center text-xs">{category.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
