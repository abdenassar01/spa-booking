import { MaterialIcons } from '@expo/vector-icons';
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
          <TouchableOpacity
            className="rounded-full bg-background p-1"
            onPress={() => push({ pathname: '/products' })}
          >
            <MaterialIcons size={16} name="keyboard-arrow-right" />
          </TouchableOpacity>
        </View>
        <BestProductsSection />
      </ScrollView>
    </RootWrapper>
  );
}
