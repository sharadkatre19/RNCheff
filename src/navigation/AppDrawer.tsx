import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from '../screens';
import BottomTabs from './BottomTabs';
import { DrawerContent } from '../components';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
