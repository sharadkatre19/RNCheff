import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useState } from "react";
import { Animated, Linking, Pressable, StyleSheet, Switch, Text, View } from "react-native";
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

const DrawerContent1: React.FC<DrawerContentProps> = ({ ...props }) => {

    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const { theme } = useTheme();
    return (
        <DrawerContentScrollView style={{ backgroundColor: theme.colors.background }} {...props}>
            <Block flex align="flex-start">
                <Block style={{ backgroundColor: theme.colors.background }}>
                    <Button textColor={theme.colors.text} style={{ padding: 16 }} title="My Recipes"
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

export { DrawerContent1 };


import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent: React.FC<DrawerContentProps> = ({ ...props }) => {
    const { theme } = useTheme();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                style={{ backgroundColor: theme.colors.contentBackground, }}>
                <Block align="center" justify="center" >
                    <Ionicons name="person-circle" size={96} />
                    <Text
                        style={{
                            color: theme.colors.text,
                            fontSize: 18,
                            fontFamily: 'Lato-Bold',
                            marginBottom: 5,
                        }}>
                        John Doe
                    </Text>
                </Block>
                <View style={{ flex: 1, backgroundColor: theme.colors.contentBackground, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        label={'ChefBFF Web app'}
                        labelStyle={{ fontFamily: 'Lato-Bold', fontSize: 16}}
                        onPress={() => {
                            Linking.openURL('https://campusrideshare.atlassian.net/jira/software/projects/CHEF/boards/2?assignee=5f5a79670b2aef0068d4ec47')
                        }}
                        icon={({ color }) => (
                            <Ionicons name={'ios-browsers-outline'} size={22} color={color} />
                        )}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;