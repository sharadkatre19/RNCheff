import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthData } from '../constants/Types';
import { DarkTheme, DefaultTheme, ExtendedTheme, Theme } from '@react-navigation/native';

type ThemeContextData = {
    theme: ExtendedTheme;
    isDarkTheme: boolean;
    toggleTheme(): void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }: any) => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const CustomDefaultTheme: ExtendedTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#80d642',
            text: '#1E1E1E',
            secondary: '#7dcfe6',
            tertiary: 'rgb(34, 31, 114)',
            danger: 'rgb(208, 2, 27)',
            background: 'rgb(239, 238, 244)',
            contentBackground: 'rgb(255, 255, 255)',
            card: 'rgb(255, 255, 255)',
            subtext: 'rgb(102, 102, 102)',
            separator: 'rgb(194, 194, 195)',
            highlight: 'rgb(199, 198, 203)',
        },
        spacing: {
            s: 8,
            m: 12,
            l: 16,
            xl: 24
        }
    }

    const CustomDarkTheme: ExtendedTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: '#80d642',
            background: '#0F0E0E',
            contentBackground: '#1E1E1E',
            text: '#ffffff',
            secondary: '#7dcfe6',
            tertiary: 'rgb(34, 31, 114)',
            danger: 'rgb(208, 2, 27)',
            card: 'rgb(255, 255, 255)',
            subtext: 'rgb(102, 102, 102)',
            separator: 'rgb(194, 194, 195)',
            highlight: 'rgb(199, 198, 203)',
        },
        spacing: {
            s: 8,
            m: 12,
            l: 16,
            xl: 24
        }
    }
    const [theme, setTheme] = React.useState(CustomDefaultTheme);


    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                //If there are data, it's converted to an Object and the state is updated.
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setIsDarkTheme(false);
                setTheme(isDarkTheme ? CustomDefaultTheme : CustomDarkTheme);
            }
        } catch (error) {
        } finally {
            setIsDarkTheme(false);
            setTheme(CustomDefaultTheme);
        }
    }

    const toggleTheme = async () => {
        if (isDarkTheme) {
            setTheme(CustomDefaultTheme);
            setIsDarkTheme(false);
        } else {
            setTheme(CustomDarkTheme);
            setIsDarkTheme(true);
        }
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

function useTheme(): ThemeContextData {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { ThemeContext, ThemeProvider, useTheme };