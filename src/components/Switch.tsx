import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import Block from './Block';

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ value, onValueChange }) => {
  const { theme } = useTheme();
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(isOn => !isOn);
    onValueChange(!value);
  };

  const iconName = value ? 'toggle-switch' : 'toggle-switch-off';

  return (
    <TouchableOpacity style={[styles.outer, isOn ?
      { justifyContent: 'flex-end', backgroundColor: 'green' }
      : { justifyContent: 'flex-start', backgroundColor: 'gray' }
    ]} activeOpacity={1} onPress={handleToggleSwitch}>
      <Block style={styles.inner} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inner: {
    height: 20,
    width: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 8,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 2
  },
  outer: {
    width: 48,
    height: 24,
    backgroundColor: 'gray',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2
  },
});

export default Switch;
