import React from 'react';
import { Image } from 'react-native';

export function AdBanner() {
  return (
    <Image
      className="h-40 w-full rounded-xl"
      source={{ uri: 'https://imgur.com/6WjflpA.png' }}
    />
  );
}
