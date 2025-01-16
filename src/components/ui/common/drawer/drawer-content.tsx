import { MaterialIcons } from '@expo/vector-icons';
import { type DrawerContentComponentProps } from '@react-navigation/drawer';
import colors from 'configs/colors';
import { usePathname } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib/helpers';

import { RootWrapper } from '../layout-helper';

const routes = [
  {
    icon: 'home',
    label: 'Acceuil',
    link: 'index',
  },
  {
    icon: 'store',
    label: 'Marketplace',
    link: 'marketplace/index',
  },
  {
    icon: 'person-pin',
    label: 'Profile',
    link: 'profile',
  },
  {
    icon: 'favorite',
    label: 'Favoris',
    link: 'favorites',
  },
  {
    icon: 'message',
    label: 'Messages',
    link: 'chat',
  },
  {
    icon: 'shopping-bag',
    label: 'Mes commandes',
    link: 'orders',
  },
  {
    icon: 'email',
    label: 'Contactez nous',
    link: 'contact',
  },
  {
    icon: 'language',
    label: 'Choisir language',
    link: 'update-language',
  },
  {
    icon: 'logout',
    label: 'Deconnexion',
    link: 'log-out',
  },
];

export function DrawerContent({
  navigation: { navigate },
}: DrawerContentComponentProps) {
  const pathname = usePathname();

  return (
    <RootWrapper
      className={cn('flex-1 gap-2 bg-primary p-2 pl-0 android:pt-12')}
    >
      <ScrollView
        contentContainerClassName="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="ml-2 items-center justify-center rounded-2xl bg-[#fa6e9d] p-4">
          <Image
            className="size-20"
            source={require('assets/icons/user-avatar.png')}
          />
          <Text className="text-base font-bold text-white">
            Hicham BERRAHOU
          </Text>
          <Text className="text-xs text-white">
            contact.devtitechnologie@gmail.com
          </Text>
        </View>
        <View className="-pl-2 mt-4 h-5 w-4/5 flex-1">
          {routes.map(({ icon, label, link }) => (
            <TouchableOpacity
              key={`drawer-link-item-${link}`}
              onPress={() => navigate(link)}
              className={cn(
                'p-4 rounded-r-full flex-row items-center gap-3',
                pathname === link ? 'bg-white' : ''
              )}
            >
              <MaterialIcons
                name={icon as keyof typeof MaterialIcons.glyphMap}
                size={20}
                color={pathname === link ? colors.primary : colors.white}
              />
              <Text
                className={cn(
                  pathname === link ? 'text-primary' : 'text-white'
                )}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </RootWrapper>
  );
}
