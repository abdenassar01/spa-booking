import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import colors from 'configs/colors';
import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';
import { I18nManager, StyleSheet, Text, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { tv } from 'tailwind-variants';

import { cn } from '@/lib/helpers';

const inputTv = tv({
  slots: {
    container: 'mb-2',
    label: 'mb-1 !text-sm text-text dark:text-textdark',
    input:
      'bg-border mt-0 rounded-xl p-4 font-inter text-base font-medium leading-5  dark:text-textdark',
  },

  variants: {
    focused: {
      true: {
        input: 'border-neutral-400',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  wrapperClassName?: string;
  sheet?: boolean;
}

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<NTextInput, NInputProps>((props, ref) => {
  const { label, error, testID, wrapperClassName, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  return (
    <View className={cn(styles.container(), wrapperClassName)}>
      {label && (
        <Text
          testID={testID ? `${testID}-label` : undefined}
          className={styles.label()}
        >
          {label}
        </Text>
      )}
      {props.sheet ? (
        <BottomSheetTextInput
          testID={testID}
          placeholderTextColor={colors.gray}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          className={cn(styles.input(), inputProps.className)}
          ref={ref as any}
          style={StyleSheet.flatten([
            { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
            inputProps.style,
          ])}
        />
      ) : (
        <NTextInput
          testID={testID}
          ref={ref}
          placeholderTextColor={colors.gray}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          className={cn(styles.input(), inputProps.className)}
          style={StyleSheet.flatten([
            { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
            inputProps.style,
          ])}
        />
      )}
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="text-danger-400 dark:text-danger-600 text-sm"
        >
          {error}
        </Text>
      )}
    </View>
  );
});

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={(field.value as string) || ''}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
