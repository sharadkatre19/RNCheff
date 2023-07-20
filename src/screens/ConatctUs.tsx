import { StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Block, Button, Text } from '../components'
import { useTheme } from '../contexts/ThemeContext';
// import { useNavigation } from '@react-navigation/native';
// import { ContactUsNavProps } from '../navigation/AppDrawer';

const ConatctUs = () => {

//   useLayoutEffect(() => {
//     const { theme } = useTheme();
//     // const navigation = useNavigation<ContactUsNavProps['navigation']>();

//     // navigation.setOptions({
//     //     headerShown: true,
//     //     headerTintColor: theme.colors.primary,
//     //     headerTitleStyle: {
//     //       color: theme.colors.text,
//     //       fontFamily: 'Lato-Black',
//     //     },
//     //     headerLeft: () => (
//     //         <Button drawer style={{paddingLeft: 8}}/>
//     //     ),
//     //     headerStyle: {
//     //         backgroundColor: theme.colors.contentBackground
//     //     }
//     // });
// });

  return (
    <Block>
      <Text>ConatctUs</Text>
    </Block>
  )
}

export default ConatctUs

const styles = StyleSheet.create({})