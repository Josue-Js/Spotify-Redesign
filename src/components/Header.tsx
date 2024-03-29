import { Image, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { Feather, Ionicons } from '@expo/vector-icons';


import Logo from '../assets/logo.png';
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type Props = {
  more?: boolean
  title?: string;
  titleStyle?: string;
}


export function Header({ more = true, title, titleStyle }: Props) {

  const { colorScheme } = useColorScheme();
  const router = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();




  return (
    <View className="w-full justify-between flex-row items-center">

      <TouchableOpacity className="w-8 h-8 items-center justify-center bg-white-opacity-4 rounded-3xl">
        {router.name === 'Home' ? (
          <Feather
            name="search"
            size={24}
            color={colorScheme === 'light' ? '#414141' : '#DDDDDD'}
          />
        ) : (
          <Ionicons
            name="chevron-back-sharp"
            size={18}
            color={colorScheme === 'light' ? '#414141' : '#DDDDDD'}
            onPress={() => navigation.goBack()}
          />
        )}
      </TouchableOpacity>

      <View>
        {title ? (
          <Text className={`text-black-950 dark:text-white-50 text-lg font-bold ${titleStyle}`}>
            {title}
          </Text>
        ) : (
          <Image source={{
            uri: Image.resolveAssetSource(Logo).uri,
            width: 108,
            height: 33
          }}
          />
        )}

      </View>

      <View className="w-6 h-6">
        {more && (
          <Feather
            name="more-vertical"
            size={24}
            color={colorScheme === 'light' ? '#414141' : '#DDDDDD'}
          />
        )}
      </View>
    </View>
  );
}