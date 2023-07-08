import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle, SafeAreaView, Platform, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface BlockProps extends ViewProps {
    id?: string;
    flex?: boolean;
    row?: boolean;
    center?: boolean;
    align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
    justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
    safe?: boolean;
    scroll?: boolean;
    card?: boolean;
    shadow?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Block: React.FC<BlockProps> = ({ style, children, ...rest }) => {
    const { theme } = useTheme();
    const { id = "Block", scroll, flex, safe, card, shadow, row, center, align, justify } = rest;
    const _style: any = [
        flex && { flex: 1 },
        card && {

        },
        row && { flexDirection: 'row' },
        align && { alignItems: align },
        justify && { justifyContent: justify },
        shadow && {
            ...Platform.select({
                ios: {
                    shadowColor: '#EAEAEA',
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 4,
                },
                android: {
                    elevation: 4,
                },
            }),
        }
        , style];
    // if (keyboard) {
    //     return (
    //         <KeyboardAwareScrollView {...blockID} {...rest} style={blockStyles}>
    //             {children}
    //         </KeyboardAwareScrollView>
    //     );
    // }

    const blockID =
        Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

    if (scroll) {
        return (
            <ScrollView {...blockID} {...rest} style={_style}>
                {children}
            </ScrollView>
        );
    }
    if (safe) {
        return (
            <SafeAreaView style={_style} {...rest}>
                {children}
            </SafeAreaView>
        )
    }

    return (
        <View style={_style} {...rest}>
            {children}
        </View>
    );
};

export default Block;
