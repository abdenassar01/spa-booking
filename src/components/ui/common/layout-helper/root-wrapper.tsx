import React, { type ReactNode } from 'react';
import { View } from 'react-native';

import { cn } from '@/lib/helpers';

export function RootWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View className="flex-1 bg-backgroundSecondary">
      <View className={cn('ios:pt-16 android:pt-10 pt-5', className)}>
        {children}
      </View>
    </View>
  );
}
