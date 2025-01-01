import 'react-native-reanimated';
import '../../global.css';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      className="bg-backgroundSecondary"
      style={{ flex: 1 }}
    >
      <BottomSheetModalProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(drawer)" />
          <Stack.Screen name="products/[id]" />
          <Stack.Screen
            name="profile/address"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="orders" />
          <Stack.Screen name="checkout" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </BottomSheetModalProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
