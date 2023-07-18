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

export default AppStack;
