import { MaterialIcons } from '@expo/vector-icons';
import { gray } from 'configs/colors';
import React from 'react';
import { View } from 'react-native';

import { Input } from '@/components/ui/common';

interface SearchBarProps {
  onChange?: (text: string) => void;
}

export function SearchBar({ onChange }: SearchBarProps) {
  return (
    <View className="">
      <View className="w-full">
        <Input
          onChangeText={onChange}
          className=""
          placeholder="Recherche produit, crème , kit"
        />
        <MaterialIcons
          name="search"
          className="absolute right-2 top-2"
          size={32}
          color={gray}
        />
      </View>
    </View>
  );
}
