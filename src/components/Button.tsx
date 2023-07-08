import * as React from 'react';
import { GestureResponderEvent, Platform, Pressable, PressableProps, StyleSheet, Text, TouchableOpacityProps, Vibration, View, ViewStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export interface ButtonProps extends PressableProps {
    style?: ViewStyle | ViewStyle[];
    title?: string;
    back?: boolean;
    drawer?: boolean;
    id?: string;
    round?: boolean;
    icon?: string;
    rounded?: boolean;
    flex?: ViewStyle['flex'];
    radius?: ViewStyle['borderRadius'];
    color?: ViewStyle['backgroundColor'];
    textColor?: ViewStyle['backgroundColor'];
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    row?: boolean;
    align?: ViewStyle['alignItems'];
    justify?: ViewStyle['justifyContent'];
    height?: ViewStyle['height'];
    width?: ViewStyle['width'];
    outlined?: boolean | string;
    shadow?: boolean;
    position?: ViewStyle['position'];
    right?: ViewStyle['right'];
    left?: ViewStyle['left'];
    top?: ViewStyle['top'];
    bottom?: ViewStyle['bottom'];
    vibrate?: number | number[] | null;
    vibrateRepeat?: boolean | null;
    children?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({ children, ...props }) => {
    const { theme } = useTheme();
    const navigation = useNavigation();
    const { style,
        id = "Button",
        title="",
        back,
        drawer,
        row,
        radius,
        flex,
        align,
        justify,
        height,
        width,
        disabled,
        position,
        right,
        left,
        top,
        bottom,
        color,
        textColor,
        round,
        onPress, secondary, danger } = props;

    const buttonColor = color
        ? color
        : 'transparent';
    const buttonStyles = StyleSheet.flatten([
        style,
        {
            backgroundColor: buttonColor,
            // borderRadius: rounded ? sizes.s : sizes.buttonRadius,
            // ...(shadow &&
            //     buttonColor !== 'transparent' && {
            //     shadowColor: colors.shadow,
            //     shadowOffset: {
            //         width: sizes.shadowOffsetWidth,
            //         height: sizes.shadowOffsetHeight,
            //     },
            //     shadowOpacity: sizes.shadowOpacity,
            //     shadowRadius: sizes.shadowRadius,
            //     elevation: sizes.elevation,
            // }),
            ...(row && { flexDirection: 'row' }),
            ...(radius && { borderRadius: radius }),
            ...(flex !== undefined && { flex }),
            ...(align && { alignItems: align }),
            ...(justify && { justifyContent: justify }),
            ...(height && { height }),
            ...(width && { width }),
            // ...(typeof outlined === 'boolean' && {
            //     borderWidth: sizes.buttonBorder,
            //     borderColor: buttonColor,
            //     backgroundColor: colors.background,
            // }),
            // ...(typeof outlined === 'string' && {
            //     borderWidth: sizes.buttonBorder,
            //     borderColor: outlined,
            // }),
            ...(disabled && { opacity: 0.5 }),
            ...(position && { position }),
            ...(right !== undefined && { right }),
            ...(left !== undefined && { left }),
            ...(top !== undefined && { top }),
            ...(bottom !== undefined && { bottom }),
            ...(danger && {backgroundColor: theme.colors.danger}),
        },
    ]) as ViewStyle;

    if (round) {
        const maxSize = Math.max(
            Number(buttonStyles.width || 0),
            Number(buttonStyles.minWidth || 0),
            Number(buttonStyles.maxWidth || 0),
            Number(buttonStyles.height || 0),
            Number(buttonStyles.minHeight || 0),
            Number(buttonStyles.maxHeight || 0),
        );
        buttonStyles.maxWidth = maxSize;
        buttonStyles.maxHeight = maxSize;
        buttonStyles.borderRadius = maxSize / 2;
    }

    const buttonID =
        Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const goBack = () => {
        navigation.goBack();
    };

    const handlePress = React.useCallback(
        (event: GestureResponderEvent) => {
            onPress?.(event);

            /* vibrate onPress */
            // if (vibrate) {
            //     Vibration.vibrate(vibrate, vibrateRepeat);
            // }
        },
        [onPress],
    );

    if (back) {
        return (
            <Pressable onPress={goBack} {...props}>
                <Ionicons name='ios-chevron-back' color={theme.colors.primary} size={32} />
            </Pressable>
        );
    }

    if (drawer) {
        return (
            <Pressable onPress={openDrawer} {...props}>
                <Ionicons name='ios-menu-outline' color={theme.colors.primary} size={32} />
            </Pressable>
        );
    }
    if (title != "") {
        return (
            <Pressable {...props}
                {...buttonID}
                disabled={disabled}
                onPress={handlePress}
                {...props}
                style={[buttonStyles, {alignItems: 'center', justifyContent: 'center', borderRadius: 6, padding: 16}]}>
                <View>
                    <Text style={{ color: textColor ? textColor : '#FFF' }}>{title}</Text>
                </View>
            </Pressable>
        );
    }
    return (
        <Pressable {...props}
            {...buttonID}
            disabled={disabled}
            onPress={handlePress}
            {...props}
            style={buttonStyles}>
            {children}
        </Pressable>
    );

}

export default Button;

export const IconButton: React.FunctionComponent<ButtonProps> = ({ children, title, ...props }) => {
    return (
        <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
        >
        </Icon.Button>
    )
}

export const IconTextButton: React.FunctionComponent<ButtonProps> = ({ children, title, ...props }) => {
    return (
        <Icon.Button name="facebook" backgroundColor="#3b5998">
            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
                Login with Facebook
            </Text>
        </Icon.Button>
    )
};