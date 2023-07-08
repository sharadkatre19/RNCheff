import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calendar, Grocery, Home, Search } from "../screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from "../contexts/ThemeContext";
import { Platform, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { View } from "react-native";
import { HomeStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export interface BottomTabButtonProps extends TouchableOpacityProps, React.PropsWithChildren<{
}> {
}
const BottomTabButton: React.FunctionComponent<BottomTabButtonProps> = ({ children, onPress, ...props }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity style={{
      top: -24,
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.colors.background,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
        },
        android: {
          elevation: 4,
        },
      }),
    }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: theme.colors.background
      }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export interface TabBarIconProps extends TouchableOpacityProps, React.PropsWithChildren<{
  color: string;
  name: string;
  size?: number;
}> {
}
const TabBarIcon: React.FunctionComponent<TabBarIconProps> = ({ color, name, size }) => {
  return (
    <Ionicons name={name} color={color} size={size || 24} />
  )
}

export default function BottomTabs() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.text,
      unmountOnBlur: true,
      tabBarStyle: {
        backgroundColor: theme.colors.contentBackground
      }
    })}>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (<TabBarIcon name="home" color={color} />)
      }}
        name="HomeStack" component={HomeStack} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (<TabBarIcon name="search" color={color} />)
        }}
        name="Search" component={Search} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (<TabBarIcon name="add" color={color} size={40} />),
        tabBarButton: (props) => (
          <BottomTabButton {...props} />
        ),
      }}
        name="Recipe" component={Calendar} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (<TabBarIcon name="ios-calendar" color={color} />)
        }}
        name="Calendar" component={Calendar} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (<TabBarIcon name="reader" color={color} />)
        }}
        name="Grocery" component={Grocery} />
    </Tab.Navigator>
  );
}
