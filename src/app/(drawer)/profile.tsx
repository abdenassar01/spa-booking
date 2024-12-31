import React from 'react';
import { Text } from 'react-native';

import { Header, RootWrapper } from '@/components/ui';

export default function Profile() {
  return (
    <RootWrapper className="container">
      <Header />
      <Text>Profile</Text>
    </RootWrapper>
  );
}
