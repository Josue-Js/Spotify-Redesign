import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";


type Props = TextInputProps & {
  icon?: ReactNode;
};

 

export function Input({ icon, ...rest }: Props) {


  return (
    <View className="w-full flex-row items-center border border-black-opacity-20 dark:border-white-opacity-14 border-opacity-10 rounded-3xl px-6 py-7 mb-4">
      <TextInput 
        className="flex-1 font-medium text-base text-black-780 dark:text-white-50"
        placeholderTextColor='#A7A7A7'
        {...rest}
      />

      {icon && icon}
    </View>
  );
}