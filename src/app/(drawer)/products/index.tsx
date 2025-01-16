import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  BestProductsSection,
  Filter,
  Header,
  InlineCategoryFilter,
  RootWrapper,
  SearchBar,
} from '@/components/ui';

export default function ProductsList() {
  return (
    <RootWrapper className="container">
      <Header />
      <ScrollView
        contentContainerClassName="gap-3 mt-3"
        showsVerticalScrollIndicator={false}
      >
        <SearchBar onChange={(text) => console.log(text)} />
        <Filter />
        <InlineCategoryFilter />
        {/* <CategoriesFilter /> */}
        <BestProductsSection />
      </ScrollView>
    </RootWrapper>
  );
}
