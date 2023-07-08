import React from 'react';
import { Platform, StyleSheet, Text, TextStyle, TextProps as RTextProps } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

export interface TextProps extends RTextProps {
    center?: boolean;
    gradient?: string[];
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    black?: boolean;
    white?: boolean;
    gray?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    color?: TextStyle['color'];
    opacity?: TextStyle['opacity'];
    size?: string | number;
    weight?: TextStyle['fontWeight'];
    font?: string;
    bold?: boolean;
    semibold?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    p?: boolean;
    subTitle?: boolean;
    align?: TextStyle['textAlign'];
    transform?: TextStyle['textTransform'];
    lineHeight?: TextStyle['lineHeight'];
    right?: TextStyle['right'];
    left?: TextStyle['left'];
    top?: TextStyle['top'];
    bottom?: TextStyle['bottom'];
    position?: TextStyle['position'];
    children?: React.ReactNode;
    style?: TextStyle;
}

const Typography = (props: TextProps) => {
    const {
        id = 'Text',
        children,
        style,
        center,
        gradient,
        color,
        opacity,
        // predefined colors
        primary,
        secondary,
        tertiary,
        black,
        white,
        gray,
        danger,
        warning,
        success,
        info,
        size,
        bold,
        semibold,
        weight,
        h1,
        h2,
        h3,
        h4,
        h5,
        p,
        subTitle,
        font,
        align,
        transform,
        lineHeight,
        position,
        right,
        left,
        top,
        bottom,
        // marginBottom,
        // marginTop,
        // marginHorizontal,
        // marginVertical,
        // marginRight,
        // marginLeft,
        // paddingBottom,
        // paddingTop,
        // paddingHorizontal,
        // paddingVertical,
        // paddingRight,
        // paddingLeft,
        ...rest
    } = props;
    const { theme } = useTheme();

    const textColor = color
    ? color
    : theme.colors.text;        

    const textStyles = StyleSheet.flatten([
        style,
        {
            color: theme.colors.text,
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            ...(textColor && { color: textColor }),
            ...(h1 && {
                fontSize: 24,
                fontFamily: 'Lato-Regular',
            }),
            ...(h2 && {
                fontSize: 20,
                fontFamily: 'Lato-Regular',
            }),
            ...(h3 && {
                fontSize: 22,
                fontFamily: 'Lato-Regular',
            }),
            ...(h4 && {
                fontSize: 17,
                fontFamily: 'Lato-Regular',
            }),
            ...(h5 && {
                fontSize: 20,
                fontFamily: 'Lato-Regular',
            }),
            ...(p && {
                fontSize: 16,
                fontFamily: 'Lato-Regular',
            }),
            ...(subTitle && {
                fontSize: 18,
                fontFamily: 'Lato-Bold',
            }),
            // ...(marginBottom && { marginBottom }),
            // ...(marginTop && { marginTop }),
            // ...(marginHorizontal && { marginHorizontal }),
            // ...(marginVertical && { marginVertical }),
            // ...(marginRight && { marginRight }),
            // ...(marginLeft && { marginLeft }),
            // ...(paddingBottom && { paddingBottom }),
            // ...(paddingTop && { paddingTop }),
            // ...(paddingHorizontal && { paddingHorizontal }),
            // ...(paddingVertical && { paddingVertical }),
            // ...(paddingRight && { paddingRight }),
            // ...(paddingLeft && { paddingLeft }),
            ...(center && { textAlign: 'center' }),
            ...(align && { textAlign: align }),
            ...(bold && { fontFamily: 'Lato-Bold' }),
            ...(semibold && { fontFamily: 'Lato-Bold' }),
            ...(weight && { fontWeight: weight }),
            ...(transform && { textTransform: transform }),
            ...(font && { fontFamily: font }),
            ...(size && { fontSize: size }),
            ...(color && { color }),
            ...(opacity && { opacity }),
            ...(lineHeight && { lineHeight }),
            ...(position && { position }),
            ...(right !== undefined && { right }),
            ...(left !== undefined && { left }),
            ...(top !== undefined && { top }),
            ...(bottom !== undefined && { bottom }),
        },
    ]) as TextStyle;

    const textID =
        Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

    return (
        <Text {...textID} {...rest} style={textStyles}>
            {children}
        </Text>
    );
};

export default React.memo(Typography);