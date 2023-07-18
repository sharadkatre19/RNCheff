import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Settings } from '../screens';
import BottomTabs from './BottomTabs';
import { DrawerContent } from '../components';
import { useTheme } from '../contexts/ThemeContext';

const Drawer = createDrawerNavigator();

const DrawerElements = [
  { route: 'BottomTabs', label: 'My Recipes', icon: 'home-outline', component: BottomTabs },
  { route: 'Tags', label: 'Tags', icon: 'ios-pricetag-outline', component: Settings },
  { route: 'Favourites', label: 'Favourites', icon: 'ios-heart-outline', component: Settings },
  { route: 'Timers', label: 'Timers', icon: 'ios-timer-outline', component: Settings },
  { route: 'Settings', label: 'Settings', icon: 'settings-outline', component: Settings },
  { route: 'ContactUs', label: 'Contact Us', icon: 'ios-chatbubbles-outline', component: Settings },
];


const AppDrawer = () => {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: 'Lato-Regular',
          fontSize: 16,
        }
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >

      {DrawerElements.map((item, index) => {
        return (
          <Drawer.Screen key={index} name={item.route} component={item.component}
            options={{
              title: item.label,
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
