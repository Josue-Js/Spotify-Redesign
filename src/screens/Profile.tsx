import { FlatList, Image, ImageBackground, SafeAreaView, Text, View } from "react-native";

import ProfileBanner from '../assets/profileBanner.png';
import ProfileImg from '../assets/profile.png';

import { Header } from "../components/Header";
import { Playlist } from "../components/Playlist";


const publicPlaylist = [
  {
    name: "Dont smile at me",
    artist: "billie Eilish",
    time: "5:33",
    image: require("../assets/tracks/lilbubblegum.jpeg")
  },
  {
    name: "At is Was",
    artist: "harry styles",
    time: "5:33",
    image: require("../assets/tracks/at-it-was.jpg")
  },
  {
    name: "Super Freaky Girl",
    artist: "Nicki Minaj",
    time: "5:33",
    image: require("../assets/tracks/super-freaky-girl.jpg")
  },
  {
    name: "Bad Habit",
    artist: "Steve lacy",
    time: "5:33",
    image: require("../assets/tracks/bad-habit.jpg")
  },
  {
    name: "Planet Her",
    artist: "Doja Cat",
    time: "5:33",
    image: require("../assets/tracks/planet-her.jpg")
  },
  {
    name: "Sweetest Pie",
    artist: "Doja Cat",
    time: "5:33",
    image: require("../assets/tracks/sweetest-pie.jpg")
  },
]



export function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white-50 dark:bg-black-890">
      <ImageBackground
        className="w-full pt-9 bg-white dark:bg-black-830"
        source={ProfileBanner}
        borderBottomLeftRadius={66}
        borderBottomRightRadius={66}
        style={{ borderBottomLeftRadius: 66, borderBottomRightRadius: 66, height: 342}}
      >
        <View className="px-6">
          <Header title="Profile" />


          <View className="items-center mt-6">
            <Image
              className="w-24 h-24 rounded-full"
              source={ProfileImg}
            />

            <View className="items-center gap-y-2 mt-3">
              <Text className="text-black-830 dark:text-white-240 text-xs font-normal">
                Soroushnorozyui@gmail.com
              </Text>
              <Text className="text-black-830 dark:text-white-50 text-xl font-bold">
                Soroushnrz
              </Text>
            </View>

            <View className="w-3/5 flex-row justify-between mt-5">
              <View className="items-center">
                <Text className="text-black-830 dark:text-white text-xl font-bold">
                  778
                </Text>
                <Text className="text-black-780 dark:text-white-370 text-sm font-normal">
                  Followes
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-black-830 dark:text-white text-xl font-bold">
                  243
                </Text>
                <Text className="text-black-780 dark:text-white-370 text-sm font-normal">
                  Followes
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View className="flex-1 px-6 pt-5">
        <Text className="text-black-950 dark:text-white-170 font-bold uppercase">
          Public Playlist
        </Text>

        <FlatList
          data={publicPlaylist}
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 0,  paddingTop: 16}}
          contentContainerStyle={{paddingBottom: 16}}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => <Playlist key={item.name} playlist={item} />}
        />
      </View>
    </SafeAreaView>
  );
}