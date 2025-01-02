/* eslint-disable max-lines-per-function */
import { Ionicons } from '@expo/vector-icons';
import colors from 'configs/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Header,
  ImagesGallery,
  QuantitySelector,
  RootWrapper,
} from '@/components/ui';

export default function ProductDetails() {
  const { push } = useRouter();
  return (
    <RootWrapper className="">
      <View className="container">
        <Header />
      </View>
      <ScrollView
        className="pt-3"
        style={{
          height:
            Dimensions.get('window').height -
            (Platform.OS === 'ios' ? 150 : 100),
        }}
      >
        <ImagesGallery />
        <View className="container gap-3">
          <Text className="font-medium">
            Trousse en velours promo fin d'année 2023, contenant 1 CREME
            FONDANTE HYDRA ORIGINEL 50 ML Acheté
          </Text>
          <View className="mt-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Image
                className="size-12 rounded-full border border-border"
                source={require('assets/icons/company-logo.png')}
              />
              <View className="flex-row items-center gap-1">
                <Text className="font-bold underline ">BEAUTY CONCEPT </Text>
                <Text className="text-gray">(124)</Text>
              </View>
            </View>
            <TouchableOpacity className="rounded-full bg-border p-2">
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={22}
                color={colors.black}
              />
            </TouchableOpacity>
          </View>

          <View className="mt-3 flex-row items-center gap-2">
            <Text className="text-2xl font-bold">200Dhs</Text>
            <Text className="text-lg text-gray line-through">160Dhs</Text>
            <View className="rounded bg-secondary p-1">
              <Text className=" text-[9px] text-primary">{`-20%`}</Text>
            </View>
          </View>
          <QuantitySelector />
          <View className="my-3 h-px w-full bg-border" />
          <Text className="font-bold">Détails du produit</Text>
          <Text className="mt-3 text-xs">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into
          </Text>
        </View>
      </ScrollView>

      <View className="border-t border-border pt-3">
        <TouchableOpacity
          onPress={() => push('/cart')}
          className="container items-center justify-center rounded-full bg-primary p-4"
        >
          <Text className="font-medium text-white">Ajouter ou lot</Text>
        </TouchableOpacity>
      </View>
    </RootWrapper>
  );
}
