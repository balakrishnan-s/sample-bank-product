import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToAddProduct = () => { 
    navigation.navigate('AddProduct');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Add Product" onPress={navigateToAddProduct} />
      
    </View>
  );
};

export default HomeScreen;