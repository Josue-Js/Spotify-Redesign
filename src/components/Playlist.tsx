import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { Feather } from "@expo/vector-icons";
import { RootStackParamList } from "../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


type Props = {
  playlist: {
    name: string;
    artist: string;
    time: string;
    image: ImageSourcePropType,
  }
}



export function Playlist({ playlist }: Props) {


  const { colorScheme } = useColorScheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



  function handleOpenPlayer() {
    navigation.navigate('Player')
  }


  return (
    <View className="flex-row items-center">

      <Image
        className="w-14 h-14 rounded-xl"
        source={playlist.image}
      />

      <TouchableOpacity
        className="flex-1 ml-5"
        onPress={handleOpenPlayer}
      >
        <View>
          <Text className="text-black-950 dark:text-white-150 text-base font-bold capitalize">
            {playlist.name}
          </Text>
          <Text className="text-black-950 dark:text-white-150 text-xs font-normal capitalize">
            {playlist.artist}
          </Text>
        </View>
      </TouchableOpacity>

      <View className="flex-row gap-x-4">
        <Text className="text-black-950 dark:text-white-170 text-base font-normal capitalize">
          {playlist.time}
        </Text>

        <TouchableOpacity>
          <Feather
            name="more-horizontal"
            size={24}
            color={colorScheme === 'light' ? '#797979' : '#E4E4E4'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}