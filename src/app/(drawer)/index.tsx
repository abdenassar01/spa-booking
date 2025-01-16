import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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
    <RootWrapper className="mx-1.5">
      <Header />
      <ScrollView
        contentContainerClassName="gap-3 mt-3"
        showsVerticalScrollIndicator={false}
      >
        <SearchBar onChange={(text) => console.log(text)} />
        <AdBanner />
        <CategoriesFilter />
        <View className="flex-row items-center gap-2">
          <Text className="text-base font-bold">Meilleurs choix</Text>
          <TouchableOpacity onPress={() => push({ pathname: '/products' })}>
            <Image
              className="size-8"
              source={require('assets/icons/arrow-right.png')}
            />
          </TouchableOpacity>
        </View>
        <BestProductsSection />
      </ScrollView>
    </RootWrapper>
  );
}
