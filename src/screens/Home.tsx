import { useState } from "react";
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Header } from "../components/Header";

import BillieEilish from '../assets/billie-eilish.png';
import LinesEffect from '../assets/linesEffect.png';
import { useColorScheme } from "nativewind";
import { Card } from "../components/Card";
import { Track } from "../components/Track";


const options = [
  { id: 1, title: 'News' },
  { id: 2, title: 'Video' },
  { id: 3, title: 'Artist' },
  { id: 4, title: 'Podcast' }
]

const Albums = [
  {
    id: 6,
    title: 'Bad Guy',
    artist: 'billie Eilish',
    image: require('../assets/tracks/bad-guy.png')
  },
  {
    id: 7,
    title: 'Scorpion',
    artist: 'Dark',
    image: require('../assets/tracks/scorpion.png')
  },
  {
    id: 8,
    title: 'dont smile at me',
    artist: 'billie Eilish',
    image: require('../assets/tracks/dont-smile-at-me.jpeg')
  },
  {
    id: 9,
    title: 'Bad Guy',
    artist: 'billie Eilish',
    image: require('../assets/tracks/bad-guy.png')
  },
]

const tracks = [
  {
    id: 1,
    name: 'As It Was',
    artist: 'Harry Styles',
    time: '5:33'
  },
  {
    id: 2,
    name: 'God Did',
    artist: 'Dj Khaled',
    time: '3:43'
  },
  {
    id: 3,
    name: 'Daylight',
    artist: 'David kushner',
    time: '3:33'
  },
  {
    id: 3,
    name: 'Flow',
    artist: 'shaw james',
    time: '2:51'
  },
  {
    id: 4,
    name: 'Figure.09',
    artist: 'Linkin Park',
    time: '3:18'
  },
  {
    id: 5,
    name: 'Closing Time',
    artist: 'semisonic',
    time: '4:34'
  },
]


export function Home() {


  const { colorScheme } = useColorScheme();
  const [activeOptionId, setActiveOptionId] = useState(1);


  function handleActiveOptionId(id: number) {
    setActiveOptionId(id);
  }


  return (
    <SafeAreaView className="flex-1 pt-9 bg-white-50 dark:bg-black-890">
      <View className="px-6">
        <Header more={true} />

        <View className="w-full relative bg-green-490 rounded-3xl px-5 py-3 mt-8">
          <View>
            <Text className="text-white-50 font-medium text-xs">
              New Album
            </Text>
            <Text className="text-white-50 font-semibold text-lg" lineBreakMode="tail">
              Happier Than
            </Text>
            <Text className="text-white-50 font-semibold text-lg" >
              Ever
            </Text>
            <Text className="text-white-50 font-medium text-sm">
              Billie Eilish
            </Text>
          </View>

          <Image source={BillieEilish} className="absolute bottom-0" />
          <Image source={LinesEffect} className="absolute right-0" />
        </View>
      </View>

      <FlatList
        className="mt-10 mb-7"
        data={options}
        horizontal={true}
        style={{ height: 30, flexGrow: 0 }}
        contentContainerStyle={{ paddingLeft: 24 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 48 }} />}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) =>
          <TouchableOpacity 
          className={item.id === activeOptionId && 'border-b border-green-490'}
          onPress={() => handleActiveOptionId(item.id)}
          >
            <Text
              className={`font-medium text-xl text-black-950  dark:text-white-50
                ${colorScheme === 'light' && item.id != activeOptionId
                  ? 'text-black-620'
                  : colorScheme === 'dark' && item.id != activeOptionId && 'text-white-240'
                } `}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        }
      />
 
      <FlatList
        data={Albums}
        horizontal={true}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingLeft: 24 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <Card key={item.id} album={item} />}
      />

      <View className="flex-1 px-6 mt-9">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-black-950 dark:text-white-50 text-xl font-bold">
            Playlist
          </Text>
          <Text className="text-black-950 dark:text-white-50 text-xs font-normal">
            see more
          </Text>
        </View>

        <FlatList 
          data={tracks}
          keyExtractor={({ name }) => name}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => <Track track={item}/>}
        />
      </View>
    </SafeAreaView>
  );
}

