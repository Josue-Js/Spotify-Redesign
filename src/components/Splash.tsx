import { useEffect } from "react";
import { SafeAreaView, Image} from "react-native";
import { useColorScheme } from "nativewind";


import Logo from '../assets/logo.png';



 
export function Splash() { 
 
  const { toggleColorScheme, colorScheme } = useColorScheme();
  
  useEffect(() => {
    toggleColorScheme()    
   
    console.log(colorScheme)
  }, []); 

  
 
  return (
    <SafeAreaView className="bg-white-50 dark:bg-black-950 flex-1 items-center justify-center">
      <Image source={Logo} />  
    </SafeAreaView> 
  );
} 