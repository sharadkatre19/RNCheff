import React from 'react';
import { NavigationContainer as NContainer } from '@react-navigation/native';

import Splash from '../screens/Splash';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useTheme } from '../contexts/ThemeContext';

type AuthStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
    Signup: undefined;
};

export type AppStackParamList = {
    BottomTabs: undefined;
    Settings: undefined;
};

export type AuthProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type SettingsProps = NativeStackScreenProps<AppStackParamList, 'Settings'>;

const NavigationContainer = () => {
    const { authData, loading } = useAuth();
    const { theme } = useTheme();

    if (loading) {
        return <Splash />;
    }
    return (
        <NContainer theme={theme}>
            {/* {<AuthStack />} */}
            {authData ? <AppStack /> : <AuthStack />}
        </NContainer>
    );
}

export default NavigationContainer;
