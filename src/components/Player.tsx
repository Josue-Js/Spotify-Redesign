import { useEffect, useRef, useState } from "react";
import { SafeAreaView, Text, View, Dimensions, TouchableOpacity, Animated, ImageBackground, ScrollView, Easing, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { useColorScheme } from "nativewind";
import Slider from '@react-native-community/slider';
import { Feather, FontAwesome, Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";


import { Header } from "./Header";

import LyricsBackground from '../assets/lyricsBackground.png'



const width = Dimensions.get('window').width - 48;
const height = Dimensions.get('window').height;


export function Player() {

  const { colorScheme } = useColorScheme();
  const [isOpenLyrics, setIsOpenLyrics] = useState(false);
  const imageSize = useRef(new Animated.Value(375)).current;
  const lyricsHeight = useRef(new Animated.Value(0)).current;



  useEffect(() => {

    Animated.timing(lyricsHeight, {
      toValue: isOpenLyrics ? height - 220 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start()


    Animated.timing(imageSize, {
      toValue: isOpenLyrics ? 42 : 375,
      duration: 300,
      useNativeDriver: false,
    }).start()

  }, [isOpenLyrics]);

  // w-full h-96

  return (
    <SafeAreaView
      className="flex-1 pb-16  bg-white-50 dark:bg-black-890 items-center"
    >
      <View className="absolute top-9 left-6 right-6 z-10">
        <Header
          title={isOpenLyrics ? 'Bad Guy' : 'Now Playing'}
          titleStyle={isOpenLyrics && 'text-white'}
        />
        {/* <TouchableOpacity onPress={() => {
          setIsOpenLyrics(!isOpenLyrics)
        }}>
          <Text>👍</Text>
        </TouchableOpacity> */}
      </View>

      <Animated.View
        className="w-full"
        style={{ height: lyricsHeight }}
      >
        <ImageBackground
          source={LyricsBackground}
          className="flex-1 overflow-hidden px-6 h-full"
          imageStyle={{ transform: [{ scale: 1.5 }] }}
        >
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 90 }}>

            <View className="mb-7">
              <Text className="font-bold text-base text-white capitalize mb-6">
                (Verse 1)
              </Text>
              <View className="gap-y-6 ml-4">
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Sleepin', you're on your tippy toes
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Creepin' around like no one knows
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Think you're so criminal
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Bruises on both my knees for you
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Don't say thank you or please
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  I do what I want when I'm wanting to
                </Text>
                <Text className="font-medium text-base text-white capitalize">
                  My soul? So cynical
                </Text>

              </View>
            </View>

            <View>
              <Text className="font-bold text-base text-white capitalize mb-6">
                (Verse 2)
              </Text>
              <View className="gap-y-6 ml-4">
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  So you're a tough guy
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Like it really rough guy
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Just can't get enough guy
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Chest always so puffed guy
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  I'm that bad type
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  I'm that bad type
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Make your mama sad type
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Make your girlfriend mad type
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  Might seduce your dad type
                </Text>
                <Text className="font-medium text-base text-white-opacity-30 capitalize">
                  I'm the bad guy, duh
                </Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>


      </Animated.View>

      <View className="w-full px-6 items-center">
        <View className={`w-full ${isOpenLyrics ? 'flex-row' : 'mt-24'}`}>
          <Animated.Image
            className="w-full rounded-3xl self-center"
            source={LyricsBackground}
            style={{
              width: imageSize,
              height: imageSize,
              marginRight: isOpenLyrics ? 16 : 0
            }}
          />

          <View
            className={`${isOpenLyrics ? 'flex-1' : 'w-full'} flex-row items-center justify-between`}
          >

            <TouchableOpacity
              className="mt-4"
              activeOpacity={1}
              onPress={() => setIsOpenLyrics(false)}
            >
              <View>
                <Text className="text-black-950 dark:text-white-50 text-xl font-bold">
                  Bad Guy
                </Text>
                <Text className="text-black-950 dark:text-white-50 text-lg font-normal">
                  Billie Eilish
                </Text>
              </View>
            </TouchableOpacity>

            <FontAwesome name="heart-o" size={24} color="#6C6C6C" />
          </View>
        </View>

        <View className={`${isOpenLyrics ? '' : 'mt-8'} w-full items-center`}>
          <Slider
            style={{ width: width, height: 40 }}
            thumbTintColor={colorScheme === 'light' ? '#5C5C5C' : '#B7B7B7'}
            minimumValue={0}
            maximumValue={100}
            value={30}
            minimumTrackTintColor={colorScheme === 'light' ? '#434343' : '#B7B7B7'}
            maximumTrackTintColor={colorScheme === 'light' ? '#0000004D' : '#8888884D'}
          />

          <View className="w-11/12 justify-between flex-row">
            <Text className="text-black-890 dark:text-black-530 text-xs font-medium">
              2:25
            </Text>
            <Text className="text-black-890 dark:text-black-530 text-xs font-medium">
              4:02
            </Text>
          </View>
        </View>

        <View className="w-10/12 flex-row items-center justify-between">
          <Feather
            name="repeat"
            size={24}
            color={colorScheme === "light" ? '#7E7E7E' : '#6D6D6D'}
          />

          <Ionicons
            name="play-skip-back"
            size={24}
            color={colorScheme === "light" ? '#363636' : '#A7A7A7'}
          />
          <Ionicons
            name="pause-circle"
            size={72}
            color="#42C83C"
          />
          <Ionicons
            name="play-skip-forward"
            size={24}
            color={colorScheme === "light" ? '#363636' : '#A7A7A7'}
          />
          <SimpleLineIcons
            name="shuffle"
            size={24}
            color={colorScheme === "light" ? '#7E7E7E' : '#6D6D6D'}
          />
        </View>

        <TouchableOpacity
          className="items-center mt-7"
          onPress={() => setIsOpenLyrics(true)}
        >
          <MaterialIcons
            name="keyboard-arrow-up"
            size={24}
            color={colorScheme === 'light' ? '#404040' : '#8C8989'}
          />
          <Text className="text-black-950 dark:text-white-50 text-sm font-medium">
            Lyrics
          </Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  );

}