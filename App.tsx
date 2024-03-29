import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Routes } from './src/Routes';
import { View } from 'react-native';
import { Splash } from './src/components/Splash';





export default function App() {

  const { colorScheme } = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(() => false);
    }, 3000);
  }, [])


  if(isLoading)
    return <Splash />


  return (
    <View className="flex-1 justify-center">
      <StatusBar
        translucent
        style={colorScheme === 'dark' ? 'light' : 'dark'}
      />
      <Routes />
    </View>
  );
}         