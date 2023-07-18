import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppDrawer from './AppDrawer';
import { Home, RecipeDetails, Search } from '../screens';
import { useTheme } from '../contexts/ThemeContext';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="AppDrawer" component={AppDrawer} />
    </Stack.Navigator>
  );
};

export type HomeStackParamList = {
  Home: undefined;
  RecipeDetails: {recipe: any};
};

export type SearchStackParamList = {
  Search: undefined;
  RecipeDetails: {recipe: any};
};

export const HomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='RecipeDetails' component={RecipeDetails}></Stack.Screen>
    </Stack.Navigator>
  )
}

export const SearchStack = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Search' component={Search}></Stack.Screen>
      <Stack.Screen name='SearchRecipeDetails' component={RecipeDetails}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppStack
