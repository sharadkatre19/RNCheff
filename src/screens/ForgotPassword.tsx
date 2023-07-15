import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput, Block } from '../components';
import { AuthProps } from '../navigation/NavigationContainer';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email address.').required('Email address is required'),
});

const ForgotPassword = () => {
    const { signIn } = useAuth();
    const { t } = useTranslation();
    const { theme } = useTheme();
    const navigation = useNavigation<AuthProps['navigation']>();

    const handleforgotPassword = (values: any) => {
        signIn(values.email, values.password);
        console.log('forgotPassword', values);
    };

    const handleSSOforgotPassword = (provider: string) => {
        console.log('SSO forgotPassword', provider);
    };

    return (
        <Block flex safe style={{ backgroundColor: theme.colors.contentBackground }}>
            <Block row align='center' justify='space-between' style={{ paddingHorizontal: 16, borderBottomWidth: 0.5, height: 48, borderBottomColor: theme.colors.border, backgroundColor: theme.colors.contentBackground }}>
                <Button back />
                <Block flex style={{ paddingLeft: 16 }}>
                    <Text>Forget password</Text>
                </Block>
            </Block>
            <Block flex style={[styles.container, { backgroundColor: theme.colors.background }]}>
                <Text h1 bold style={styles.heading}>{t('forgotPassword.WelcomeMessage')}</Text>
                <Text subTitle style={styles.subTitle}>{t('forgotPassword.WelcomeSubText')}</Text>

                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={handleforgotPassword}
                validationSchema={forgotPasswordValidationSchema}
                >
                    {({ handleSubmit }) => (
                        <>
                            <TextInput label='Email' icon='mail' name="email" placeholder="Enter your email" />

                            <Button color={theme.colors.primary} title='Reset password' onPress={() => handleSubmit()} style={styles.button}>
                                Log in
                            </Button>
                        </>
                    )}
                </Formik>

            </Block>

        </Block>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 60
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
        marginTop: 8,
    },
});