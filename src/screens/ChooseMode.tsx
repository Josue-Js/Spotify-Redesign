import { ImageBackground, SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from "nativewind";
import { Feather } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';

import { Button } from "../components/Button";

import Logo from '../assets/logo.png';
import ChooseModeBackground from '../assets/chooseMode.png';
import { RootStackParamList } from "../Routes";


 

export function ChooseMode() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {setColorScheme, colorScheme } = useColorScheme();

  function handleNavigation() {
    navigation.navigate('RegisterSignIn')
  }

  function handleSetTheme(theme: 'dark' | 'light') {
    setColorScheme(theme)
  }


  return (
    <SafeAreaView className="flex-1 bg-white">
      <ImageBackground
        className="flex-1 px-6 pt-9 pb-16"
        source={ChooseModeBackground}>
        <View className="flex-1 items-center justify-between">

          <Image source={Logo} />

          <View className="w-full gap-y-9">
            <View className="items-center">
              <Text className="font-bold text-white-150 text-2xl mb-6">
                Choose Mode
              </Text>

              <View className="flex-row gap-x-14">
                <View className="items-center gap-y-5" >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    className={`rounded-full w-16 h-16 overflow-hidden ${colorScheme === 'dark' && 'border-b-2 border-green-490'}`}
                    onPress={() => handleSetTheme('dark')}
                  >
                    <BlurView className="w-16 h-16 items-center justify-center ">
                      <Feather name="moon" size={30} color="#F2F2F2" />
                    </BlurView>
                  </TouchableOpacity>

                  <Text className="font-bold text-base text-white-150">
                    Dark Mode
                  </Text>
                </View>

                <View className="items-center gap-y-5">
                  <TouchableOpacity
                    activeOpacity={0.8}
                    className={`rounded-full w-16 h-16 overflow-hidden ${colorScheme === 'light' && 'border-b-2 border-green-490'}`}
                    onPress={() => handleSetTheme('light')}
                  >
                    <BlurView className="w-16 h-16 items-center justify-center ">
                      <Feather name="sun" size={30} color="#F2F2F2" />
                    </BlurView>
                  </TouchableOpacity>

                  <Text className="font-bold text-base text-white-150">
                    Light Mode
                  </Text>
                </View>
              </View>
            </View>

            <Button title="Continue" onPress={handleNavigation}/>

          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}