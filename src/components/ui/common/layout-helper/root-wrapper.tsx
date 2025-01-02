import React, { type ReactNode } from 'react';
import { Platform, View } from 'react-native';

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
      <View
        className={cn(
          '',
          className,
          Platform.OS === 'ios' ? 'pt-16' : 'pb-5 pt-8'
        )}
      >
        {children}
      </View>
    </View>
  );
}
