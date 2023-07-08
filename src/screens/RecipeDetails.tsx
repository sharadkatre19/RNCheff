import React from 'react';
import { Button, Block, Text } from '../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/AppStack';
import { useTheme } from '../contexts/ThemeContext';
import { useRoute } from '@react-navigation/native';
import { FlatList, Image } from 'react-native';
export type HomeNavProps = NativeStackScreenProps<HomeStackParamList, 'RecipeDetails'>;

const RecipeDetails: React.FC = () => {
  const { theme } = useTheme();
  const { params } = useRoute<HomeNavProps['route']>();

  return (
    <Block flex>
      <Block safe />
      <Block row align='center' justify='space-between' style={{ paddingHorizontal: 16, borderBottomWidth: 0.5, height: 48, borderBottomColor: theme.colors.border }}>
        <Button back />
        <Block flex style={{ paddingLeft: 16 }}>
          <Text>Recipe details</Text>
        </Block>
      </Block>
      <Block flex scroll style={{ paddingHorizontal: 16, paddingVertical: 16, backgroundColor: theme.colors.background, paddingBottom: 40 }}>
        <Block shadow style={{ borderRadius: 6, backgroundColor: theme.colors.background }}>
          <Image source={{ uri: params.recipe.imageURL }} borderRadius={6} style={{ width: '100%', height: 220 }} />
        </Block>
        <Block style={{paddingTop: 16}}>
          <Text>{params.recipe.name}</Text>
        </Block>
        <Block style={{paddingTop: 16}}>
          <Block>
            <Text subTitle>Ingredients</Text>
          </Block>
          <Block style={{paddingTop: 16}}>
            <FlatList
              data={params.recipe.ingredients}
              renderItem={(item) => {
                return (
                  <Block row justify='space-between'>
                    <Text>{item.item.name}</Text>
                    <Text>{item.item.quantity}</Text>
                    <Text>{item.item.type}</Text>
                  </Block>
                )
              }}
            />
          </Block>
          <Block>
            <Text subTitle>Ingredients</Text>
          </Block>
          <Block style={{paddingTop: 16}}>
            <FlatList
              data={params.recipe.steps}
              renderItem={(item) => {
                return (
                  <Block row justify='space-between'>
                    <Text>{item.item}</Text>
                  </Block>
                )
              }}
            />
          </Block>
        <Button danger title='Delete recipe'></Button>
        </Block>
      </Block>
    </Block>
  );
};

export default RecipeDetails;