import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './comp/splash';
import Main from './comp/Main';
import Receita from './comp/receita';
import Receita2 from './comp/receita2';
import Receita3 from './comp/receita3';
import Receita4 from './comp/receita4';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          name="Logo"
          component={LogoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receita"
          component={Receita}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receita2"
          component={Receita2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Receita3"
          component={Receita3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Receita4"
          component={Receita4}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


