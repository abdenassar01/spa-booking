import React from 'react';
import { Text } from 'react-native';

import { Header, RootWrapper } from '@/components/ui';

export default function Marketplace() {
  return (
    <RootWrapper className="container">
      <Header />
      <Text>Marketplace</Text>
    </RootWrapper>
  );
}
