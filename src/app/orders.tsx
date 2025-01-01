import React from 'react';
import { Text } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function Orders() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader />
      <Text>Orders</Text>
    </RootWrapper>
  );
}
