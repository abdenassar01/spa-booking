import React from 'react';
import { Text } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function Address() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader />
      <Text>Address</Text>
    </RootWrapper>
  );
}
