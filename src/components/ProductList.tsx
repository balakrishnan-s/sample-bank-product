import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import { styles } from './ProductList.style';
import { Products } from '../model/Products';
import Card from '../components/CardItems';

const ProductsList = ({ products }) => {
  const Item = ({
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  }: Products) => (
    <Card style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.imageView}>
          <Image
            source={{ uri: thumbnail }}
            style={styles.dummyImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{description}</Text>
          <View style={styles.ratingView}>
            <AirbnbRating
              count={5}
              defaultRating={rating}
              size={20}
              isDisabled={false}
              showRating={false}
            />
          </View>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.discountPercentage}>(${price + discountPercentage})</Text>
          <Text style={styles.percentage}>({Math.round(((discountPercentage / price) * 100)).toFixed(2)} %)</Text>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.stock}>Stock : {stock}</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>

      </View>
    </Card>
  )
  return <FlatList
    data={products}
    renderItem={({ item, index }) => <Item
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      discountPercentage={item.discountPercentage}
      rating={item.rating}
      stock={item.stock}
      brand={item.brand}
      category={item.category}
      thumbnail={item.thumbnail}
      images={item.images} />}
    keyExtractor={(item) => item.id.toString()}
    showsVerticalScrollIndicator={false}

  />;
};

export default ProductsList;