import React from 'react';
import { Text } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function Cart() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader />
      <Text>Cart</Text>
    </RootWrapper>
  );
}
