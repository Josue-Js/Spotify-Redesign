import { View, ImageBackground, SafeAreaView, Text, Image } from "react-native";

import { Button } from "../components/Button";

import Logo from '../assets/logo.png';
import GetStartedBackground from '../assets/getStarted.png';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export function GetStarted() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleNavigation() {
    navigation.navigate('ChooseMode')
  }

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        className="flex-1 px-6 pt-9 pb-16"
        source={GetStartedBackground}
      >
        <View className="flex-1 items-center justify-between">

          <Image source={Logo} />

          <View className="w-full gap-9 items-center">
            <View className="gap-5">
              <Text className="text-white-50 font-bold text-2xl text-center">
                Enjoy listening to music
              </Text>
              <Text className="text-gray-530 font-normal text-base text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.
              </Text>
            </View>

            <Button title="Get Started" onPress={handleNavigation} />
          </View>


        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}