import React, { useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Switch, Button, Block } from '../components';
import { useTheme } from '../contexts/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { SettingsProps } from '../navigation/NavigationContainer';

const Settings = () => {
    const { signOut } = useAuth();

    const { theme, toggleTheme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(theme.dark);
    const navigation = useNavigation<SettingsProps['navigation']>();

    const handleSwitchValueChange = (value: boolean) => {
        setIsEnabled(value);
        toggleTheme();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTintColor: theme.colors.primary,
            headerTitleStyle: {
              color: theme.colors.text,
              fontFamily: 'Lato-Black',
            },
            headerLeft: () => (
                <Button drawer style={{paddingLeft: 8}}/>
            ),
            headerStyle: {
                backgroundColor: theme.colors.contentBackground
            }
        });
    });

    const handleOptionPress = (option: string) => {
        // Handle option press
    };

    return (

        <Block flex style={{ backgroundColor: theme.colors.background }}>
            <Block shadow style={{ marginTop: 16, marginHorizontal: 16, padding: 16, backgroundColor: theme.colors.contentBackground, borderRadius: 6 }}>
                <Text>Profile</Text>
                <Block row align='center' justify='space-between' style={{paddingTop: 16,}}>
                    <Block row align='center'>
                        <Ionicons name="ios-person-circle" size={24} />
                        <Text style={{paddingLeft: 8}}>Sharad Katre</Text>
                    </Block>
                    <Ionicons name="chevron-forward" size={24} />
                </Block>
            </Block>
            <Block row align='center' justify='space-between' shadow style={{ marginTop: 16, marginHorizontal: 16, padding: 16, backgroundColor: theme.colors.contentBackground, borderRadius: 6 }}>
                <Text>Dark theme</Text>
                <Switch value={isEnabled} onValueChange={handleSwitchValueChange} />
            </Block>

            <Block row align='center' justify='space-between' shadow style={{ marginTop: 16, marginHorizontal: 16, padding: 12, backgroundColor: theme.colors.contentBackground, borderRadius: 6 }}>
                <Button onPress={() => {
                    Alert.alert('Logout', 'Are you sure you want to logout?', [
                        {
                            text: 'No',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: 'Yes', onPress: () => signOut() },
                    ]);
                }}>
                    <Block row align='center'>
                        <Ionicons name="ios-log-out-outline" color="red" size={32} />
                        <Text style={{ paddingLeft: 16 }}>Logout</Text>
                    </Block>
                </Button>
            </Block>
            {/* Add more options as needed */}
        </Block>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 16,
    },
    itemText: {
        fontSize: 16,
    },
});