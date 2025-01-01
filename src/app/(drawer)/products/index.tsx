import React from 'react';
import { Text } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function ProductsList() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader />
      <Text>List of products</Text>
    </RootWrapper>
  );
}
