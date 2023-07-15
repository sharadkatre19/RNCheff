import React from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { Block } from '../components';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Block align='center' justify='center'>
        <Image source={require('../assets/images/Logo.png')} style={{ height: 220, width: 220 }} />
      </Block>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </View>
  );
};

export default Splash;
