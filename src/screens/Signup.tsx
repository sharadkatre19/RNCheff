import React, { useEffect, useLayoutEffect } from 'react';
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

const signupValidationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required.'),
    email: Yup.string().email('Please enter valid email address.').required('Email address is required.'),
    password: Yup.string().required('Password is required.'),
});

const Signup = () => {
    const { signIn } = useAuth();
    const { t } = useTranslation();
    const { theme } = useTheme();
    const navigation = useNavigation<AuthProps['navigation']>();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: true,
    //         headerLargeTitle: true,
    //         headerSearchBarOptions: {
    //             placeholder: "Search"
    //         }
    //     })
    // })

    const handleSignup = (values: any) => {
        signIn(values.email, values.password);
        console.log('Signup', values);
    };

    const handleSSOSignup = (provider: string) => {
        console.log('SSO Signup', provider);
    };

    return (
        <Block safe flex style={{ backgroundColor: theme.colors.contentBackground }}>
            <Block row align='center' justify='space-between' style={{ paddingHorizontal: 16, borderBottomWidth: 0.5, height: 48, borderBottomColor: theme.colors.border, backgroundColor: theme.colors.contentBackground }}>
                <Button back />
                <Block flex style={{ paddingLeft: 16 }}>
                    <Text>Signup</Text>
                </Block>
            </Block>
            <Block flex style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Block scroll>
                    <Block style={styles.container}>
                        <Text h1 bold style={styles.heading}>{t('signup.WelcomeMessage')}</Text>
                        <Text subTitle style={styles.subTitle}>{t('signup.WelcomeSubText')}</Text>

                        <Formik
                            initialValues={{ fullName: "", email: '', password: '' }}
                            onSubmit={handleSignup}
                            validationSchema={signupValidationSchema}
                        >
                            {({ handleSubmit }) => (
                                <>
                                    <TextInput label='Username' icon='person-circle' name="userName" placeholder="Enter your username" />
                                    <TextInput label='Email' icon='mail' name="email" placeholder="Enter your email address" />
                                    <TextInput label='Confirm email' icon='mail' name="confirmEmail" placeholder="Confirm your email address" />
                                    <TextInput label="Password" icon='lock-closed' name="password" placeholder="Enter your password" secureTextEntry />

                                    <Block row align='center' justify='center' style={{ flexWrap: 'wrap' }}>
                                        <Text style={styles.orText}>By continuing you agree to our</Text>
                                        <Button style={{ padding: 0, paddingHorizontal: 8, paddingTop: 2 }} textColor={theme.colors.primary} title='Terms' onPress={() => {}}></Button>
                                        <Text> and </Text>
                                        <Button style={{ padding: 0, paddingHorizontal: 8, paddingTop: 2 }} textColor={theme.colors.primary} title='Privacy Policy' onPress={() => {}}></Button>
                                    </Block>

                                    <Button color={theme.colors.primary} title='Signup' onPress={() => handleSubmit()} style={styles.button}>
                                    </Button>
                                </>
                            )}
                        </Formik>

                        <Block row align='center' justify='center' style={{ marginTop: 32 }}>
                            <Text style={styles.orText}>Already have an account?</Text>
                            <Button style={{ padding: 0, paddingLeft: 8, paddingTop: 2 }} textColor={theme.colors.primary} title='Login' onPress={() => navigation.goBack()}></Button>
                        </Block>

                    </Block>
                </Block>
            </Block>
        </Block>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 24,
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