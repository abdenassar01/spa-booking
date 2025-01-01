import React from 'react';
import { Text } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function ProductDetails() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader />
      <Text>Product Item</Text>
    </RootWrapper>
  );
}
