import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";


type Props = TouchableOpacityProps & {
  title: string;
  textClassName?: string;
}



export function Button({ title, textClassName, ...rest }: Props) {


  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="bg-green-490 rounded-3xl py-8 w-full"
      {...rest}
    >
      <Text className={`font-bold text-white-50 text-center text-xl ${textClassName}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}