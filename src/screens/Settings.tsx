import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Switch, Button, Block } from '../components';
import { useTheme } from '../contexts/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
    const { signOut } = useAuth();

    const { theme, toggleTheme } = useTheme();
    const [isEnabled, setIsEnabled] = useState(theme.dark);

    const handleSwitchValueChange = (value: boolean) => {
        setIsEnabled(value);
        toggleTheme();
    };

    const handleOptionPress = (option: string) => {
        // Handle option press
    };

    return (

        <Block flex style={{ backgroundColor: theme.colors.background }}>
            <Block safe />
            <Block row align='center' justify='space-between' style={{ paddingHorizontal: 16, borderBottomWidth: 0.5, height: 48, borderBottomColor: theme.colors.border, backgroundColor: theme.colors.contentBackground }}>
                <Button back />
                <Block flex style={{ paddingLeft: 16 }}>
                    <Text>Settings</Text>
                </Block>
            </Block>
            <Block row align='center' justify='space-between' shadow style={{marginTop: 16, marginHorizontal: 16, paddingHorizontal: 12, backgroundColor: theme.colors.contentBackground, borderRadius: 6}}>
                <Text>Dark theme</Text>
                <Switch value={isEnabled} onValueChange={handleSwitchValueChange} />
            </Block>
            <Block row align='center' justify='space-between' shadow style={{marginTop: 16, marginHorizontal: 16, padding: 12, backgroundColor: theme.colors.contentBackground, borderRadius: 6}}>
                <Button onPress={() => {
                    signOut();
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