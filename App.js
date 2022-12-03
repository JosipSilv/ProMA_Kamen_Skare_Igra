import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

//Font
import { useFonts } from 'expo-font';

//Ekrani
import PocetniEkran from './screens/PocetniEkran';
import EkranIzbor from './screens/EkranIzbor';
import EkranKraj from './screens/EkranKraj';

//Navigacija
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator(); 

export default function App() {
  const [loaded] = useFonts({
    PoiretOneRegular: require('./assets/fonts/PoiretOne-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={PocetniEkran} />
        <Stack.Screen name='Izbor' component={EkranIzbor} />
        <Stack.Screen name='Kraj' component={EkranKraj} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
