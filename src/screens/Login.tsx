import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Text, Button, TextInput, Block } from '../components';
import { AuthProps } from '../navigation/NavigationContainer';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

type ProfileScreenNavigationProp = AuthProps['navigation'];
type ProfileScreenRouteProp = AuthProps['route'];

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email address.').required('Email address is required'),
    password: Yup.string().required('Password is required'),
});

const Login = () => {
    const { signIn } = useAuth();
    const { t } = useTranslation();
    const { theme } = useTheme();

    const handleLogin = (values: any) => {
        signIn(values.email, values.password);
        console.log('Login', values);
    };

    const handleSSOLogin = (provider: string) => {
        console.log('SSO Login', provider);
    };

    return (
        <View style={styles.container}>
            <Text h1 bold style={styles.heading}>{t('login.WelcomeMessage')}</Text>
            <Text subTitle style={styles.subTitle}>{t('login.WelcomeSubText')}</Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleLogin}
            // validationSchema={loginValidationSchema}
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

            <Block row justify='space-evenly' align='center' style={{paddingTop: 16}}>
            <Button title='Forgot password'></Button>
            </Block>

            <Text style={styles.orText}>OR</Text>

            <Block row justify='space-evenly' align='center' style={{paddingTop: 16}}>
                <Icon name='ios-logo-facebook' size={40} color={'#4267B2'} />
                <Icon name='ios-logo-google' size={40} color={'#DB4437'} />
            </Block>

        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
        marginTop: 24,
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 16,
    },
    ssoButton: {
        marginTop: 8,
    },
});