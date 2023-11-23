
import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, Button, ScrollView, View } from 'react-native';
import axios from 'axios';

import { serverURL } from '../const/confg';
import { Products } from '../model/Products';
import { styles } from './AddProductScreen.style';
import ProductList from '../components/ProductList';

const AddProductScreen = ({ navigation }) => {

  const [text, onChangeText] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  const [price, onChangePrice] = React.useState(0);
  const [discountPercentage, onChangeDiscountPercentage] = React.useState(0);
  const [stock, onChangeStock] = React.useState(0);
  const [brand, onChangeBrand] = React.useState('');
  const [category, onChangeCategory] = React.useState('');
  const [thumbnail, onChangeThumbnail] = React.useState('');
  const [image1, onChangeImage1] = React.useState('');
  const [image2, onChangeImage2] = React.useState('');
  const [image3, onChangeImage3] = React.useState('');
  const [image4, onChangeImage4] = React.useState('');
  const [image5, onChangeImage5] = React.useState('');




  const searchProduct = () => {
    const getProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/search?q=` + text);
      //setProducts(response?.data?.products);
    };
    getProduct();
  };

  const viewProduct = (id) => {
    //Alert.alert('Search Title', "id : "+JSON.stringify(id));
    navigation.navigate('ViewProductScreen', {
      id: id
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.lable}>Title* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Text style={styles.lable}>Description* :</Text>
          <TextInput
            style={styles.description}
            onChangeText={onChangeDescription}
            value={description}
            multiline={true}
            numberOfLines={5}
            textAlignVertical='top'
          />
          <Text style={styles.lable}>Price* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePrice}
            keyboardType='numeric'
            maxLength={5}
            value={price} />
          <Text style={styles.lable}>Discount Percentage* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDiscountPercentage}
            keyboardType='numeric'
            maxLength={5}
            value={discountPercentage} />
          <Text style={styles.lable}>Stock* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeStock}
            keyboardType='numeric'
            maxLength={5}
            value={stock} />
          <Text style={styles.lable}>Brand* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeBrand}
            value={brand}
          />
          <Text style={styles.lable}>Category :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCategory}
            value={category}
          />
          <Text style={styles.lable}>Thumbnail* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeThumbnail}
            keyboardType='url'
            placeholder='Image URL'
            value={thumbnail}
          />
          <Text style={styles.lable}>Product Images* :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeImage1}
            keyboardType='url'
            placeholder='Image URL'
            value={image1}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeImage2}
            keyboardType='url'
            placeholder='Image URL'
            value={image2}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeImage3}
            keyboardType='url'
            placeholder='Image URL'
            value={image3}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeImage4}
            keyboardType='url'
            placeholder='Image URL'
            value={image4}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeImage5}
            keyboardType='url'
            placeholder='Image URL'
            value={image5}
          />

          <Button title="Add Product" onPress={searchProduct} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default AddProductScreen;
