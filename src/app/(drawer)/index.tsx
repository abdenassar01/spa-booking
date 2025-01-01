import { ScrollView } from 'react-native-gesture-handler';

import { Header, RootWrapper, SearchBar } from '@/components/ui';

export default function HomeScreen() {
  return (
    <RootWrapper className="p-22 container">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar onChange={(text) => console.log(text)} />
      </ScrollView>
    </RootWrapper>
  );
}
