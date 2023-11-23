import React, { useEffect, useState } from 'react';
import { ScrollView, Alert, View, Text, SafeAreaView, Image } from 'react-native';
import { Button, Flex, WhiteSpace, WingBlank, Carousel } from '@ant-design/react-native';
import axios from 'axios';
import { AirbnbRating } from 'react-native-ratings';

import { Products } from '../model/Products';
import { styles } from './ViewProductScreen.style';

const ViewProductScreen = ({ route, navigation }) => {
  // const [data, setData] = useState<any[]>([]); 
  const [product, setProduct] = useState<Products>();
  useEffect(() => {
    const data = route.params?.id;
    // Alert.alert('Alert Title', "id : " + JSON.stringify(data));
    if (data) {
      setProduct(data);
      const getProduct = async () => {
        //Alert.alert('Alert Title ID', "id : " + JSON.stringify(data.id));
        const response = await axios.get(`https://dummyjson.com/products/` + data?.id);
        setProduct(response?.data);
        //Alert.alert('Alert Title Data', "id : " + JSON.stringify(response?.data));
      };
      getProduct();
    }

  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={{ marginTop: 20 }}>
            <WingBlank  >
              <Flex>
                <Flex.Item  >
                  <Text style={styles.category}>{product?.category}</Text>
                </Flex.Item>

                <Flex.Item style={styles.ratingTopView}>
                  <Text style={styles.ratingTest}>{product?.rating}</Text>

                  <View style={styles.ratingView}>
                    <AirbnbRating
                      count={5}
                      defaultRating={product?.rating}
                      size={20}
                      isDisabled={true}
                      showRating={false}
                    />
                  </View>
                </Flex.Item>
              </Flex>
            </WingBlank>


          </View>
          <View style={{ marginTop: 20 }}>
            <Carousel
              style={styles.wrapper}
              autoplay
              infinite
            >
              {product?.images.map((img, index) => {
                return <View
                  style={[styles.containerHorizontal]}>
                  <Image source={{ uri: img }} key={index} style={styles.dummyImage} />
                </View>;
              })}
            </Carousel>
          </View>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <View style={styles.priceView}>
            <Text style={styles.discountText}>-{Math.round(((product?.discountPercentage / product?.price) * 100)).toFixed(2)}% </Text>

            <Text style={styles.priceText}>${product?.price.toFixed(2)}</Text>
          </View>
          <Text style={styles.mrpPrice}>M.R.P:${product?.discountPercentage + product?.price}</Text>
          <Text style={styles.brand}>{product?.brand}</Text>
          <Text style={styles.stock}>Stock : {product?.stock}</Text>
          <Text style={styles.description}>View product details :</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <View>
            {product?.images.slice(0).reverse().map((img, index) => {
              return <View
                style={[styles.datailsImage]}>
                <Image source={{ uri: img }} key={index} style={styles.dummyImage} />
              </View>;
            })}
          </View>
        </View></ScrollView>

    </SafeAreaView>
  );
};
export default ViewProductScreen;
