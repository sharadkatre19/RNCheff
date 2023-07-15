import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput, Block } from '../components';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthProps } from '../navigation/NavigationContainer';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email address.').required('Email address is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {
    const { signIn } = useAuth();
    const { t } = useTranslation();
    const { theme } = useTheme();
    const navigation = useNavigation<AuthProps['navigation']>();

    const handleLogin = (values: any) => {
        signIn(values.email, values.password);
        console.log('Login', values);
    };

    const handleSSOLogin = (provider: string) => {
        console.log('SSO Login', provider);
    };

    return (
        <Block safe>
            <Block scroll>
                <Block style={styles.container}>

                    <Block align='center' justify='center'>
                        <Image source={require('../assets/images/Logo.png')} style={{height: 160, width: 160}} />
                    </Block>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleLogin}
                    validationSchema={loginValidationSchema}
                    >
                        {({ handleSubmit }) => (
                            <>
                                <TextInput label='Email' icon='mail' name="email" placeholder="Enter your email" />
                                <TextInput label="Password" icon='lock-closed' name="password" placeholder="Enter your password" secureTextEntry />

                                <Button color={theme.colors.primary} title='Login' onPress={() => handleSubmit()} style={styles.button}>
                                    Log in
                                </Button>
                            </>
                        )}
                    </Formik>

                    <Block row justify='space-evenly' align='center' style={{ paddingTop: 12 }}>
                        <Button textColor={theme.colors.primary} title='Forgot password' onPress={() => {
                            navigation.navigate('ForgotPassword')
                        }}></Button>
                    </Block>

                    <Text style={styles.orText}>OR</Text>

                    <Block row justify='space-evenly' align='center' style={{ paddingTop: 16 }}>
                        <Icon name='ios-logo-facebook' size={40} color={'#4267B2'} style={{ borderRadius: 2, overflow: 'hidden' }} />
                        <Icon name='ios-logo-instagram' size={40} color={'#DB4437'} />
                    </Block>

                    <Block row align='center' justify='center'>
                        <Text style={styles.orText}>Don't have an account?</Text>
                        <Button style={{ padding: 0, paddingLeft: 8, paddingTop: 2 }} textColor={theme.colors.primary} title='Create one' onPress={() => {
                            navigation.navigate('Signup')
                        }}></Button>
                    </Block>
                </Block>
            </Block>
        </Block>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 40,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        fontFamily: "Lato-Bold"
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 24,
        textAlign: 'center',
        fontFamily: "Lato-Regular"
    },
    button: {
        marginTop: 16,
        padding: 16
    },
    orText: {
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 16,
    },
    ssoButton: {
        marginTop: 8
    },
});