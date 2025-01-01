import { MaterialIcons } from '@expo/vector-icons';
import colors from 'configs/colors';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export function PriceFilter() {
  const [selected, setSelected] = React.useState<'asc' | 'desc' | undefined>(
    undefined
  );

  return (
    <TouchableOpacity
      onPress={() => setSelected((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
      className="flex-row items-center gap-2 rounded-full border border-[#D9D9D9] p-2 px-3.5"
    >
      <View className="">
        <MaterialIcons
          className="-rotate-90"
          name="play-arrow"
          size={8}
          color={selected === 'asc' ? colors.primary : 'black'}
        />
        <MaterialIcons
          className="rotate-90"
          name="play-arrow"
          size={8}
          color={selected === 'desc' ? colors.primary : 'black'}
        />
      </View>
      <Text className="text-xs">Prix</Text>
    </TouchableOpacity>
  );
}
