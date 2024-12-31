import { Text } from 'react-native';

import { Header, RootWrapper } from '@/components/ui';

export default function HomeScreen() {
  return (
    <RootWrapper className="p-22 container">
      <Header />
      <Text className="text-xs font-bold text-primary">Hello world </Text>
    </RootWrapper>
  );
}
