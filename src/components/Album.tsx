import { Image, TouchableOpacity, View, Text, ImageSourcePropType } from "react-native";

import Img from '../assets/bad-guy.png'
import { RootStackParamList } from "../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type Props = {
  album: {
    name: string;
    image: ImageSourcePropType,
  }
}


export function Album({ album }: Props) {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  function handleOpenPlayer() {
    navigation.navigate('Player')
  }



  return (
    <View className="items-center gap-y-4">

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleOpenPlayer}
      >
        <Image
          className="w-36 h-32 rounded-3xl"
          source={album.image}
        />
      </TouchableOpacity>

      <Text className="text-black-950 dark:text-white-240 text-sm font-semibold text-center capitalize">
        {album.name}
      </Text>
    </View>

  );
}