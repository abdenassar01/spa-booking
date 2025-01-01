import React from 'react';
import { Text, View } from 'react-native';

import { Header, ImagesGallery, RootWrapper } from '@/components/ui';

export default function ProductDetails() {
  return (
    <RootWrapper className="">
      <View className="container">
        <Header />
      </View>
      <ImagesGallery />
      <View>
        <Text>Products</Text>
      </View>
    </RootWrapper>
  );
}
