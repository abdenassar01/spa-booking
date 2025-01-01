import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { cn } from '@/lib/helpers';

import { Livraison } from './livraison';
import { PriceFilter } from './price-filter';

export function Filter() {
  const [isNew, setIsNew] = React.useState<boolean>(false);
  return (
    <ScrollView
      contentContainerClassName="gap-2"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Livraison />
      <PriceFilter />
      <TouchableOpacity
        className={cn(
          'rounded-full border p-2 px-3.5',
          isNew ? 'bg-primary border-primary' : 'border-[#D9D9D9]'
        )}
        onPress={() => setIsNew((prev) => !prev)}
      >
        <Text className={cn('text-xs', isNew ? 'text-white' : '')}>
          Trier par Nouveaux
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="rounded-full border border-[#D9D9D9] p-2 px-3.5">
        <Text className="text-xs">Other Filter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
