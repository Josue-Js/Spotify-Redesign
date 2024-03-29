import { useState } from "react";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import GoogleIcon from '../assets/google-icon.png';
import { RootStackParamList } from "../Routes";

export function SignIn() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const { colorScheme } = useColorScheme();


  function handlePasswordIsVisible() {
    setPasswordIsVisible(!passwordIsVisible)
  }



  return (
    <SafeAreaView className="flex-1 px-6 pt-9 pb-16 bg-white-50 dark:bg-black-890">
      <View className="flex-1 items-center">

        <Header />

        <View className="items-center mt-20">
          <Text className="font-bold text-3xl text-black-780 dark:text-white-50 mb-6">
            Sign in
          </Text>

          <View className="flex-row">
            <Text className="font-normal text-xs text-black-780 dark:text-white-50">
              If You Need Any Support {' '}
            </Text>
            <Text className="font-normal text-xs text-green-490">
              Click Here
            </Text>
          </View>
        </View>


        <View className="w-full mt-8 mb-5">
          <Input placeholder="Enter Username Or Email" />
          <Input
            placeholder="Password"
            secureTextEntry={!passwordIsVisible}
            icon={passwordIsVisible ? (
              <Ionicons
                name="eye-outline"
                size={24}
                color={colorScheme === 'light' ? '#8D8D8D' : '#5B5B5B'}
                onPress={handlePasswordIsVisible}
              />
            ) : (
              <Ionicons
                name="eye-off-outline"
                size={24}
                color={colorScheme === 'light' ? '#8D8D8D' : '#5B5B5B'}
                onPress={handlePasswordIsVisible}
              />
            )
            }
          />
        </View>

        <Text className="font-medium text-sm text-black-780 dark:text-gray-370  text-left w-full mb-6">
          Recovery password
        </Text>

        <Button
          title="Sign In"
          onPress={() => navigation.navigate('HomeTabs')}
        />

        <View className="flex-row items-center gap-x-3 mt-8">
          <View className="flex-1 border border-white-150 dark:border-black-780" />
          <Text className="text-black-780 dark:text-white-140">
            Or
          </Text>
          <View className="flex-1 border border-white-150 dark:border-black-780" />
        </View>

        <View className="flex-row gap-x-14 items-center mt-12 mb-10">
          <Image source={GoogleIcon} />
          <FontAwesome
            name="apple"
            size={36}
            color={colorScheme === 'light' ? '#303030' : '#DADADA'}
          />
        </View>


        <View className="flex-row">
          <Text className="font-semibold text-sm text-black-780 dark:text-white-50">
            Not A Member ? {' '}
          </Text>
          <Text className="font-semibold text-sm text-blue-470">
            Register Now
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}