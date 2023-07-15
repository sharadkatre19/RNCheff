import React, { useState } from 'react';
import { StyleSheet, TextInput as TI, TextInputProps, View } from 'react-native';
import { useField } from 'formik';
import Text from './Text';
import { useTheme } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface TInputProps extends TextInputProps {
    name: string;
    label: string;
    icon?: string;
    iconType?: string;
}

const TextInput: React.FC<TInputProps> = ({ name, icon, label, ...props }) => {
    const [field, meta] = useField(name);
    const { theme } = useTheme();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                {icon && icon != "" ? (<View>
                    <Icon name={icon} size={24} color={theme.colors.primary} />
                </View>) : null}
                <TI
                    style={[styles.input, {color: theme.colors.text}]}
                    placeholderTextColor={'#C3C2C2'}
                    onChangeText={field.onChange(name)}
                    onBlur={field.onBlur(name)}
                    value={field.value}
                    secureTextEntry={name === 'password' && !isPasswordVisible}
                    {...props}
                />
                {
                    name === 'password' ? (
                        <View>
                            <Icon 
                            name={isPasswordVisible ? 'eye' : 'eye-off'}
                             size={24}
                              color={theme.colors.primary}
                              onPress={() => {
                                if (isPasswordVisible) {
                                    setIsPasswordVisible(false);
                                } else {
                                    setIsPasswordVisible(true);
                                }
                              }}
                               />
                        </View>
                    ) : null
                }
            </View>
            {meta.touched && meta.error && <Text style={{ color: theme.colors.danger }}>{meta.error}</Text>}
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
})
