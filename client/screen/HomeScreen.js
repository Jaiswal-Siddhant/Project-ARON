import React from 'react'
import { Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Home Page"
      onPress={() =>
        navigation.navigate('Home')
      }
    />
  );
};

export default HomeScreen