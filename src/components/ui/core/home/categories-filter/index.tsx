import colors from 'configs/colors';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const categories = [
  { id: 1, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 2, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 3, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 4, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
  { id: 5, label: 'Soins Cheveux', icon: 'https://i.imgur.com/oN5IHc2.png' },
];

export function CategoriesFilter() {
  return (
    <ScrollView
      horizontal
      contentContainerClassName="gap-2.5"
      showsHorizontalScrollIndicator={false}
      className=""
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={{ backgroundColor: `${colors.secondary}35` }}
          className="flex-row items-center gap-1.5 rounded-full p-1"
        >
          <Image
            source={{ uri: category.icon }}
            className="size-7 rounded-full"
          />
          <Text className="text-center text-xs">{category.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
