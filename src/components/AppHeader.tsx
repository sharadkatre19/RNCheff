import React from 'react'
import { View, StyleSheet, TouchableOpacity, ViewProps, ViewStyle, PressableProps, GestureResponderEvent, TextStyle } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Block from './Block';
import Text from './Text';

export interface AppHeaderType extends PressableProps {
    style?: ViewStyle | ViewStyle[];
    menu: string
    onPressMenu?: ((event: GestureResponderEvent) => void) | undefined;
    back: string
    onPressBack?: ((event: GestureResponderEvent) => void) | undefined;
    title: string
    right: string
    rightComponent: string
    onRightPress?: ((event: GestureResponderEvent) => void) | undefined;
    optionalBtn: string
    optionalBtnPress?: ((event: GestureResponderEvent) => void) | undefined;
    headerBg: string
    iconColor: string
    titleAlight: TextStyle['textAlign'];
    optionalBadge: number
}

const IconSize = 24;

const AppHeader: React.FunctionComponent<AppHeaderType> = ({ children, ...props }) => {
    const {
        style,
        menu,
        onPressMenu,
        back,
        onPressBack,
        title,
        right,
        rightComponent,
        onRightPress,
        optionalBtn,
        optionalBtnPress,
        headerBg = "white",
        iconColor = 'black',
        titleAlight,
        optionalBadge
    } = props;

    const LeftView = () => (
        <View style={styles.view}>
            {menu && <TouchableOpacity onPress={onPressMenu}>
                <Ionicons name="menu" size={IconSize} color={iconColor} />
            </TouchableOpacity>}
            {back && <TouchableOpacity onPress={onPressBack}>
                <Ionicons name="arrow-left" size={IconSize} color={iconColor} />
            </TouchableOpacity>}
        </View>
    )
    const RightView = () => (
        rightComponent ? rightComponent :
            <View style={[styles.view, styles.rightView]}>
                {optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
                    <Ionicons name={optionalBtn} size={IconSize} color={iconColor} />
                </TouchableOpacity>}
                {right !== '' && <TouchableOpacity onPress={onRightPress}>
                    <Ionicons name={right} size={IconSize} color={iconColor} />
                </TouchableOpacity>}
            </View>
    )
    const TitleView = () => (
        <View style={styles.titleView}>
            <Text subTitle style={{ color: iconColor, textAlign: titleAlight }}>{title}</Text>
        </View>
    )
    return (
        <Block style={[styles.header, style, { backgroundColor: headerBg }]}>
            <LeftView />
            <TitleView />
            <RightView />
        </Block>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    view: {
        marginHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleView: {
        flex: 1,
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    }
})