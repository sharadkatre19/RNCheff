import React, { useState } from 'react';
import {View} from 'react-native';
import { Text, Button } from '../components';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();
    const [locale, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
      };

    // Example usage
    const greeting = locale === 'en' ? 'Hello' : 'Hola';
  
    return (
      <View>
        <Button title='English' onPress={() => changeLanguage('en')}/>
        <Button title="Español" onPress={() => changeLanguage('es')}/>
        <Text>{greeting}</Text>
        <Text>{locale}</Text>
      </View>
    );
  };
export default ChangeLanguage;
