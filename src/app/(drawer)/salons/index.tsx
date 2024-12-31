import React from 'react';
import { Text } from 'react-native';

import { Header, RootWrapper } from '@/components/ui';

export default function Salons() {
  return (
    <RootWrapper className="container">
      <Header />
      <Text>Salons</Text>
    </RootWrapper>
  );
}
