//yarn add @react-navigation/native
//expo install react-native-screens react-native-safe-area-context
//yarn add @react-navigation/drawer
//expo install react-native-gesture-handler


import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import MealsNavigator from './navigation/MealsNavigator';

//expo install expo-app-loading
import AppLoading from 'expo-app-loading';
//yarn add @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={()=> setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator/>;
}
