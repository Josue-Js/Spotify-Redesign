import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native";
import { Header } from "../components/Header";


import ArtistImage from '../assets/artist.png';
import { Album } from "../components/Album";
import { Track } from "../components/Track";


const albums = [
  {
    name: 'lilbubblegum',
    image: require('../assets/tracks/lilbubblegum.jpeg')
  },
  {
    name: 'ocean eyes',
    image: require('../assets/tracks/ocean-eyes.jpeg')
  },
  {
    name: 'Happier Than Ever',
    image: require('../assets/tracks/happier-than-ever.jpeg')
  },
]

const songs = [
  {
    id: 1,
    name: 'dont smile at me',
    artist: 'Billie Eilish',
    time: '5:33'
  },
  {
    id: 2,
    name: 'lilbubblegum',
    artist: 'Billie Eilish',
    time: '3:43'
  },
  {
    id: 3,
    name: 'Ocean Eyes',
    artist: 'Billie Eilish',
    time: '3:33'
  },
  {
    id: 3,
    name: 'Lovely',
    artist: 'Billie Eilish',
    time: '2:51'
  },
  {
    id: 3,
    name: 'Tv',
    artist: 'Billie Eilish',
    time: '2:51'
  },
  {
    id: 3,
    name: 'Happier Than Ever',
    artist: 'Billie Eilish',
    time: '2:51'
  },
]




export function Artist() {


  return (
    <SafeAreaView className="flex-1 pb-16 bg-white-50 dark:bg-black-890">

      <ImageBackground
        className="w-full h-60"
        source={ArtistImage}
        borderBottomLeftRadius={69}
        borderBottomRightRadius={69}
      >
        <View className="px-6 pt-9">
          <Header title=" " />
        </View>

      </ImageBackground>


      <View className="w-3/4 items-center gap-y-2 self-center mt-3">
        <Text className="text-black-950 dark:text-white-170 text-xl font-bold">
          Billie Eilish
        </Text>
        <Text className="text-black-950 dark:text-white-240 text-sm font-normal capitalize">
          2 album , 67 track
        </Text>
        <Text className="text-black-950 dark:text-white-240 text-xs font-normal text-center capitalize w-64">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis adipiscing vestibulum orci enim, nascetur vitae
        </Text>
      </View>

      <View className="mt-2">
        <Text className="text-black-950 dark:text-white-240 text-base font-bold mb-4 pl-4">
          Albums
        </Text>

        <FlatList
          data={albums}
          contentContainerStyle={{ paddingLeft: 24 }}
          keyExtractor={({ name }) => name}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-4" />}
          renderItem={({ item }) => <Album album={item} />}
        />
      </View>

      <View className="mt-7">
        <View className="px-4 mb-4 justify-between flex-row items-center">
          <Text className="text-black-950 dark:text-white-240 text-base font-bold">
            Songs
          </Text>
          <Text className="text-black-950 dark:text-white-240 text-sm font-normal">
            See more
          </Text>
        </View>

        <FlatList
          data={songs}
          style={{ flexGrow: 0, height: 120 }}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          keyExtractor={({ name }) => name}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => <Track track={item} />}
        />
      </View>

    </SafeAreaView>
  );
}