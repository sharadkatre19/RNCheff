import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppDrawer from './AppDrawer';
import { Home, RecipeDetails } from '../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="AppDrawer" component={AppDrawer} />
    </Stack.Navigator>
  );
};

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

export default AppStack
export {HomeStack};
