import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ConatctUs, Favouirtes, Settings, Tags, Timers } from '../screens';
import BottomTabs from './BottomTabs';
import { DrawerContent } from '../components';
import { useTheme } from '../contexts/ThemeContext';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();

// export type AppDrawerParamList = {
//   BottomTabs: undefined;
//   Tags: undefined;
//   Favourites: undefined;
//   Timers: undefined;
//   Settings: undefined;
//   ContactUs: undefined;
// };

// export type BottomTabsNavProps = NativeStackScreenProps<AppDrawerParamList, 'BottomTabs'>;
// export type TagsNavProps = NativeStackScreenProps<AppDrawerParamList, 'Tags'>;
// export type FavouritesNavProps = NativeStackScreenProps<AppDrawerParamList, 'Favourites'>;
// export type TimersNavProps = NativeStackScreenProps<AppDrawerParamList, 'Timers'>;
// export type SettingsNavProps = NativeStackScreenProps<AppDrawerParamList, 'Settings'>;
// export type ContactUsNavProps = NativeStackScreenProps<AppDrawerParamList, 'ContactUs'>;

const DrawerElements = [
  { route: 'BottomTabs', label: 'My Recipes', icon: 'home-outline', component: BottomTabs, showHeader: false },
  { route: 'Tags', label: 'Tags', icon: 'ios-pricetag-outline', component: Tags, showHeader: true },
  { route: 'Favourites', label: 'Favourites', icon: 'ios-heart-outline', component: Favouirtes, showHeader: true },
  { route: 'Timers', label: 'Timers', icon: 'ios-timer-outline', component: Timers, showHeader: true },
  { route: 'Settings', label: 'Settings', icon: 'settings-outline', component: Settings, showHeader: true },
  { route: 'ContactUs', label: 'Contact Us', icon: 'ios-chatbubbles-outline', component: ConatctUs, showHeader: true },
];


const AppDrawer = () => {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
        drawerLabelStyle: {
          fontFamily: 'Lato-Regular',
          fontSize: 16,
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          color: theme.colors.text,
          fontFamily: 'Lato-Black',
        },
        headerStyle: {
          backgroundColor: theme.colors.contentBackground
        }

      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >

      {DrawerElements.map((item, index) => {
        return (
          <Drawer.Screen key={index} name={item.route} component={item.component}
            options={{
              title: item.label,
              headerShown: item.showHeader,
              drawerIcon: ({ color }) => (
                <Ionicons name={item.icon} size={22} color={color} />
              ),
            }}
          />
        )
      })}
    </Drawer.Navigator>
  );
}

export default AppDrawer;
