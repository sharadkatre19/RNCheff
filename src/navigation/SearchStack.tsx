import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RecipeDetails, Search } from '../screens';

const Stack = createNativeStackNavigator();

export type SearchStackParamList = {
  Search: undefined;
  SearchRecipeDetails: {recipe: any};
};

const SearchStack = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Search' component={Search}></Stack.Screen>
      <Stack.Screen name='SearchRecipeDetails' component={RecipeDetails}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default SearchStack;
