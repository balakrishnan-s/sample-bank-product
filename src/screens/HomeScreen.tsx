import React, {  useState } from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
 
import { Products } from '../model/Products';
import { styles } from './HomeScreen.style';
import ProductList from '../components/ProductList';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState<Products[]>();

  useFocusEffect(
    React.useCallback(() => {
      const getuser = async () => {
        const response = await axios.get(`https://dummyjson.com/products`); 
        setProducts(response?.data?.products);
      };
      getuser();
    }, [])
  );

  const navigateToAddProduct = (id) => {
    navigation.navigate('AddProduct');
  };
  
  const viewProduct = (id) => {
    navigation.navigate('ViewProductScreen', {
      id: id
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add Product" onPress={navigateToAddProduct} />
      {products &&
        <ProductList
          products={products}
          onClick={viewProduct}
        />} 
    </View>
  );
};

export default HomeScreen;