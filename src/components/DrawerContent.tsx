import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useState } from "react";
import { Animated, StyleSheet, Switch, Text, View } from "react-native";
import Block from "./Block";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { AppStackParamList } from "../navigation/NavigationContainer";
import { useTheme } from "../contexts/ThemeContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppDrawerNavProps = NativeStackScreenProps<AppStackParamList, 'BottomTabs'>;
type ProfileScreenNavigationProp = AppDrawerNavProps['navigation'];

interface DrawerContentProps extends DrawerContentComponentProps {
}

const DrawerContent: React.FC<DrawerContentProps> = ({ ...props }) => {

    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const { theme } = useTheme();
    return (
        <DrawerContentScrollView style={{ backgroundColor: theme.colors.background }} {...props}>
            <Block flex align="flex-start">
                <Block style={{ backgroundColor: theme.colors.background }}>
                    <Button textColor={theme.colors.text} style={{ padding: 16 }} title="My recipe's"
                        onPress={() => {
                            navigation.navigate('BottomTabs');
                        }} />
                </Block>
                <Button textColor={theme.colors.text} style={{ padding: 16 }} title="Settings"
                    onPress={() => {
                        navigation.navigate('Settings');
                    }} />
            </Block>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;
