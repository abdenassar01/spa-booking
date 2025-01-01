import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
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
  const { push } = useRouter();

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
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-bold">Meilleurs choix</Text>
          <TouchableOpacity onPress={() => push({ pathname: '/products' })}>
            <Text className="text-sm text-primary underline">Voir Tout</Text>
          </TouchableOpacity>
        </View>
        <BestProductsSection />
      </ScrollView>
    </RootWrapper>
  );
}
