import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home, RecipeDetails } from '../screens';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  Home: undefined;
  RecipeDetails: {recipe: any};
};

const HomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='RecipeDetails' component={RecipeDetails}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack;
