import { AntDesign } from '@expo/vector-icons';
import colors from 'configs/colors';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { RootWrapper, WithGoBackHeader } from '@/components/ui';

export default function PaymentSuccess() {
  return (
    <RootWrapper className="container">
      <WithGoBackHeader isCart />
      <View className="mt-3 items-center justify-center">
        <Text className="w-3/5 text-center text-2xl font-medium text-primary">
          Votre commande est confirmée
        </Text>
        <Text className="my-3 w-[70%] text-center text-lg">
          Merci d'avoir effectué vos achats chez nous Votre commande vous
          parviendra le 1 janvier 2024.
        </Text>
        <Image
          className="h-80 w-96"
          source={require('assets/illustrations/success.png')}
        />

        <Link className="w-4/5" href="/orders">
          <View className="w-full items-center justify-center rounded-full bg-primary p-4">
            <Text className="font-medium text-white">Mes commandes</Text>
            <AntDesign
              className="absolute left-3 top-4"
              name="arrowleft"
              size={20}
              color={colors.white}
            />
          </View>
        </Link>
      </View>
    </RootWrapper>
  );
}
