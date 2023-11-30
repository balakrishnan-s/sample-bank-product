
import React, { useState } from 'react';
import { Alert, Text, SafeAreaView, TextInput, Button, ScrollView, View, Form } from 'react-native';
import axios from 'axios';

import { serverURL } from '../const/confg';
import Products from '../model/Products';
import { styles } from './AddProductScreen.style';

const AddProductScreen = ({ navigation }) => {

  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [price, onChangePrice] = useState(0);
  const [discountPercentage, onChangeDiscountPercentage] = useState(0);
  const [rating, onChangeRating] = useState(0);
  const [stock, onChangeStock] = useState(0);
  const [brand, onChangeBrand] = useState('');
  const [category, onChangeCategory] = useState('');
  const [thumbnail, onChangeThumbnail] = useState('');
  const [image1, onChangeImage1] = useState('');
  const [image2, onChangeImage2] = useState('');
  const [image3, onChangeImage3] = useState('');
  const [image4, onChangeImage4] = useState('');
  const [image5, onChangeImage5] = useState('');

  const addProducts = () => {
    const addProduct = async () => {
      const params: Products = {
        id: 0,
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        thumbnail: thumbnail,
        images: [...image1, ...image2, ...image3, ...image4, ...image5],
      };
      const response = await axios.post('https://dummyjson.com/products/add', params)
        .then(function (response) {
          console.log(response);
          Alert.alert(
            'Product Add',
            'Product added successfully',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
              { text: 'OK', onPress: navigateToHome },
            ],
            { cancelable: false }
          );

        })
        .catch(function (error) {
          console.log(error);
        });
    };
    addProduct();
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
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
            onChangeText={onChangeTitle}
            value={title}
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

          <Button title="Add Product" onPress={addProducts} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default AddProductScreen;
