import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Button } from 'react-native';
import axios from 'axios';

import { serverURL } from '../const/confg';
import { Products } from '../model/Products';
import { styles } from './SearchScreen.style';
import ProductList from '../components/ProductList';

const SearchScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [products, setProducts] = useState<Products[]>();

  // useEffect(() => {
  //     if(text && text.length < 3){
  //       setProducts([]);
  //     }
  // } );

  const searchProduct = () => { 
    const getProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/search?q=` + text);
      setProducts(response?.data?.products);
    };
    getProduct(); 
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Search Product" onPress={searchProduct} />
      {products &&
        <ProductList
          products={products}
        />}
    </SafeAreaView>
  );
};

export default SearchScreen;
