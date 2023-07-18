import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Settings } from '../screens';
import BottomTabs from './BottomTabs';
import { DrawerContent } from '../components';
import { useTheme } from '../contexts/ThemeContext';

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{title: 'My recipes',
    drawerIcon: ({color}) => (
      <Ionicons name="home-outline" size={22} color={color} />
    ),}} />
      <Drawer.Screen name="Settings" component={Settings} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
