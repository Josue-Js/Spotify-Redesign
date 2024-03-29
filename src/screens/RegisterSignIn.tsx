import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Button } from "../components/Button";

import Banner from '../assets/banner.png';
import Logo from '../assets/logo.png';

import { RootStackParamList } from "../Routes";



export function RegisterSignIn() {

  const { colorScheme } = useColorScheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();



  return (
    <SafeAreaView className="flex-1 bg-white-50 dark:bg-black-890">
      <ImageBackground
        className="flex-1 px-6 pt-9 pb-16"
        source={Banner}>

        <View className="flex-1 items-center">
          <View className="w-full">
            <TouchableOpacity className="w-8 h-8 items-center justify-center bg-white-opacity-4 rounded-3xl">
              <Ionicons
                name="chevron-back-sharp"
                size={18}
                color={colorScheme === 'light' ? '#414141' : '#DDDDDD'}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          </View>

          <Image source={Logo} className="mt-32" />

          <View className="mt-14 mb-7">
            <Text className="font-bold text-2xl text-black-780 text-center dark:text-white-50 mb-5">
              Enjoy listening to music
            </Text>
            <Text className="font-normal text-base text-black-530 dark:text-gray-370 text-center">
              Spotify is a proprietary Swedish audio streaming and media services provider
            </Text>
          </View>

          <View className="flex-row justify-between w-full">
            <Button
              title="Register"
              className="w-36 py-6"
              onPress={() => navigation.navigate('Register')}
            />
            <Button
              title="Sign In"
              className="bg-white-50 dark:bg-black-890 w-36 py-6" textClassName="text-black-950 dark:text-white-50"
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}