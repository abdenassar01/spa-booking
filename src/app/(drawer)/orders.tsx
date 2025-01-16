import React from 'react';
import { Text } from 'react-native';

import { Header, RootWrapper } from '@/components/ui';

export default function Orders() {
  return (
    <RootWrapper className="container">
      <Header />
      <Text>Orders</Text>
    </RootWrapper>
  );
}
