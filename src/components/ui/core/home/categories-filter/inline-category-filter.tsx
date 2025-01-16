import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';

import { cn } from '@/lib/helpers';

const categories = [
  { id: 1, label: 'Soins Cheveux', icon: 'https://imgur.com/E6FR2oY.png' },
  { id: 2, label: 'Soins Cheveux', icon: 'https://imgur.com/7niR6be.png' },
  { id: 3, label: 'Soins Cheveux', icon: 'https://imgur.com/7niR6be.png' },
  { id: 4, label: 'Soins Cheveux', icon: 'https://imgur.com/E6FR2oY.png' },
  { id: 5, label: 'Soins Cheveux', icon: 'https://imgur.com/E6FR2oY.png' },
  { id: 6, label: 'Soins Cheveux', icon: 'https://imgur.com/E6FR2oY.png' },
  { id: 7, label: 'Soins Cheveux', icon: 'https://imgur.com/7niR6be.png' },
  { id: 8, label: 'Soins Cheveux', icon: 'https://imgur.com/E6FR2oY.png' },
  { id: 9, label: 'Soins Cheveux', icon: 'https://imgur.com/7niR6be.png' },
  { id: 10, label: 'Soins Cheveux', icon: 'https://imgur.com/7niR6be.png' },
];

export function InlineCategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<number>(
    categories[0].id
  );

  return (
    <ScrollView
      contentContainerClassName="gap-3"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <TouchableOpacity
          onPress={() => setSelectedCategory(category.id)}
          key={category.id}
          className={cn(
            'rounded-full items-center flex-row gap-1.5 p-1 px-3',
            selectedCategory === category.id ? 'bg-primary' : 'bg-border'
          )}
        >
          <Image
            source={{ uri: category.icon }}
            className="size-10 rounded-full"
          />
          <Text
            className={cn(
              'text-center text-xs',
              selectedCategory === category.id ? 'text-white' : 'text-primary'
            )}
          >
            {category.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
