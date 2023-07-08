import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../contexts/ThemeContext';
import Text from './Text';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ value, onValueChange }) => {
  const {theme} = useTheme();
  const handleToggleSwitch = () => {
    onValueChange(!value);
  };

  const iconName = value ? 'toggle-switch' : 'toggle-switch-off';

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggleSwitch}>
        <Text>{value}</Text>
        <MaterialCommunityIcons name={iconName} size={40} color={value ? theme.colors.primary : 'gray'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  switch: {
    width: 50,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Switch;
