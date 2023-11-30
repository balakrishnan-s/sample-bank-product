import React, { useState } from 'react';
import { Alert, SafeAreaView, TextInput, Button } from 'react-native';
import axios from 'axios';

import { serverURL } from '../const/confg';
import Products from '../model/Products';
import { styles } from './SearchScreen.style';
import ProductList from '../components/ProductList';

const SearchScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  const [products, setProducts] = useState<Products[]>();

  const searchProduct = () => {
    const getProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/search?q=` + text);
      setProducts(response?.data?.products);
    };
    getProduct();
  };

  const viewProduct = (id) => { 
    navigation.navigate('ViewProductScreen', {
      id: id
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Search Product" onPress={searchProduct} />
      {products &&
        <ProductList
          products={products}
          onClick={viewProduct}
           />
      }
    </SafeAreaView>
  );
};

export default SearchScreen;
