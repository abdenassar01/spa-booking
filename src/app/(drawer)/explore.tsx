import { Text } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function TabTwoScreen() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader />
      <Text className="pl-10">Explore</Text>
    </RootWrapper>
  );
}
