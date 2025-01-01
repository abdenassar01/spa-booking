import { ScrollView } from 'react-native-gesture-handler';

import {
  AdBanner,
  BestProductsSection,
  CategoriesFilter,
  Header,
  RootWrapper,
  SearchBar,
} from '@/components/ui';

export default function HomeScreen() {
  return (
    <RootWrapper className="p-22 container">
      <Header />
      <ScrollView
        contentContainerClassName="gap-3 mt-3"
        showsVerticalScrollIndicator={false}
      >
        <SearchBar onChange={(text) => console.log(text)} />
        <CategoriesFilter />
        <AdBanner />
        <BestProductsSection />
      </ScrollView>
    </RootWrapper>
  );
}
