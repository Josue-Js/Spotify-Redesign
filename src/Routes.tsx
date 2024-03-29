import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from './components/Splash';
import { GetStarted } from './screens/GetStarted';
import { ChooseMode } from './screens/ChooseMode';
import { RegisterSignIn } from './screens/RegisterSignIn';
import { SignIn } from './screens/SignIn';
import { Register } from './screens/Register';
import { Home } from './screens/Home';
import { Player } from './components/Player';
import { Artist } from './screens/Artist';
import { Profile } from './screens/Profile';
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';


export type RootStackParamList = {
  Home: undefined;
  GetStarted: undefined;
  ChooseMode: undefined;
  RegisterSignIn: undefined;
  SignIn: undefined;
  Register: undefined
  HomeTabs: undefined;
  Player: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function Tabs() {

  const { colorScheme } = useColorScheme();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colorScheme === 'light' ? '#FFF' : '#343434',
        borderTopWidth: 0,
        height: 73,
      }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) =>
            <AntDesign name="home" size={size} color={focused ? '#42C83C' : '#737373'} />
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) =>
            <Feather name="compass" size={size} color={focused ? '#42C83C' : '#737373'} />
        }}
      />
      <Tab.Screen
        name="Artist"
        component={Artist}
        options={{
          tabBarIcon: ({ focused, size }) =>
            <Entypo name="heart" size={size} color={focused ? '#42C83C' : '#737373'} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) =>
            <Ionicons name="person-sharp" size={size} color={focused ? '#42C83C' : '#737373'} />
        }}
      />
    </Tab.Navigator>
  );
}


function Stacks() {
  return (
    <Stack.Navigator
      initialRouteName='GetStarted'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name='GetStarted' component={GetStarted} />
        <Stack.Screen name='ChooseMode' component={ChooseMode} />
        <Stack.Screen name='RegisterSignIn' component={RegisterSignIn} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='HomeTabs' component={Tabs} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          animation: 'slide_from_bottom'
        }}
      >
        <Stack.Screen name='Player' component={Player} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}