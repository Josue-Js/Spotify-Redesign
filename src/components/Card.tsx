import { Image, ImageBackground, ImageSourcePropType, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";

import PlayIcon from '../assets/play.png';
import { FontAwesome } from "@expo/vector-icons";
import { RootStackParamList } from "../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


type Props = {
  album: {
    id: number,
    title: string
    artist: string
    image: ImageSourcePropType,
  }
}



export function Card({ album }: Props) {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  function handleOpenPlayer() {
    navigation.navigate('Player')
  }



  return (
    <View className="items-start">
      <TouchableOpacity
        className="relative"
        activeOpacity={0.82}
        onPress={handleOpenPlayer}
      >
        <Image source={album.image} className="rounded-3xl w-36 h-44" />

        <TouchableOpacity
          className="w-7 h-7 rounded-full bg-white-100 dark:bg-black-830 items-center justify-center absolute -bottom-3 right-2"
        >
          <Image source={PlayIcon} />
        </TouchableOpacity>
      </TouchableOpacity>

      <View className="mt-3">
        <Text className="text-black-950 dark:text-white-50 text-base font-bold">
          {album.title}
        </Text>
        <Text className="text-black-950 dark:text-white-50 text-sm font-normal">
          {album.artist}
        </Text>
      </View>
    </View>

  );
}