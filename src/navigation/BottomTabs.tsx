//@ts-nocheck
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendar, Grocery, Profile } from "../screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../contexts/ThemeContext";
import { StyleSheet, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import { View } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import * as Animatable from 'react-native-animatable';
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

export const hideTabBarComponents = [
  'RecipeDetails',
];

export default function BottomTabs() {
  const { theme } = useTheme();
  const {height} = useWindowDimensions();
  return (
    <Tab.Navigator screenOptions={({ route, navigation }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.text,
      unmountOnBlur: true,
      headerTintColor: theme.colors.primary,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        height: height > 700 ? 80 : 60,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 12,
        backgroundColor: theme.colors.contentBackground,
        display: getTabBarVisibility(route),
      }
    })}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  );
}

export const getTabBarVisibility = (route: any) => {
  // console.log("🚀  ~ route:", route)
  const routeName = getFocusedRouteNameFromRoute(route);
  // console.log("🚀 ~ file:", routeName)

  if (routeName == 'RecipeDetails') {
    return 'none';
  }
  return 'flex';
};

const TabArr = [
  { route: 'HomeStack', label: 'Recipes', icon: 'home-outline', component: HomeStack },
  { route: 'SearchStack', label: 'Search', icon: 'search-outline', component: SearchStack },
  { route: 'Add', label: 'Add New', icon: 'add-outline', component: Profile },
  { route: 'Plan', label: 'Plan', icon: 'ios-calendar-outline', component: Calendar },
  { route: 'Grocery', label: 'Grocery', icon: 'reader-outline', component: Grocery },
];

export const TabButton = (props: any) => {
  const { theme } = useTheme();
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<Animatable.View & View>(null);
  const textViewRef = useRef<Animatable.Text & Text>(null);

  useEffect(() => {
    if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current?.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current?.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current?.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      textViewRef.current?.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: theme.colors.contentBackground, borderRadius: 16 }]} />
        <View style={[styles.btn, { backgroundColor: focused ? theme.colors.primary : theme.colors.contentBackground }]}>
          <Ionicons name={item.icon} color={focused ? theme.colors.contentBackground : theme.colors.primary} size={24} />
          <Animatable.View
            ref={textViewRef}>
            {focused && <Text style={{
              color: theme.colors.contentBackground, paddingHorizontal: 8
            }}>{item.label} {focused}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 40
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  }
})