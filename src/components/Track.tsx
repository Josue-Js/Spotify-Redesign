import { View, Text, TouchableOpacity, Image } from "react-native";


import PlayIcon from '../assets/play.png';
import { Foundation } from "@expo/vector-icons";
import { useState } from "react";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type Props = {
  track: {
    id: number;
    name: string;
    artist: string;
    time: string;
  }
}



export function Track({ track }: Props) {

  const [likeIt, setLikeIt] = useState(false);
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  function handleLike() {
    setLikeIt(!likeIt)
  }


  function handleOpenPlayer() {
    navigation.navigate('Player')
  }


  return (
    <View className="flex-row items-center justify-between">
      <View className="gap-x-6 flex-row items-center">
        <TouchableOpacity
          className="w-9 h-9 rounded-full bg-white-100 dark:bg-black-830 items-center justify-center"
          onPress={handleOpenPlayer}
        >
          <Image source={PlayIcon} />
        </TouchableOpacity>

        <TouchableOpacity className="items-start" onPress={handleOpenPlayer}>
          <Text className="text-black-950 dark:text-white-50 text-base font-bold">
            {track.name}
          </Text>
          <Text className="text-black-950 dark:text-white-50 text-xs font-normal">
            {track.artist}
          </Text>
        </TouchableOpacity>
      </View>


      <View className="flex-row gap-x-12 items-center">
        <Text className="text-black-950 dark:text-white-50 text-base font-normal">
          {track.time}
        </Text>
        <Foundation
          name="heart"
          size={24}
          color={likeIt
            ? '#42C83C'
            : colorScheme === 'light' ? '#B4B4B4' : '#565656'
          }
          onPress={handleLike}
        />
      </View>
    </View>
  );
}