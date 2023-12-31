import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 16
  },
  footerContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.2
  },
  card: {
    //backgroundColor: '#fffff'
  },
  imageView: { 
    paddingHorizontal: 4,
    flex: 0.3, 
  },
  textContainer: {
    flex: 0.7,
    paddingVertical: 8,
    marginStart: 4
  },
  dummyImage: {
    height: 180,
    width: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#001C30' 
  },
  body: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600' 
  },
  category: {
    marginTop: 0,
    fontSize: 16
  },
  price: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001C30' 
  },
  discountPercentage: {
    marginTop: 4,
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: '500',
    color: '#2B2A4C'  
  },
  stock: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#2B2A4C'  
  }, 
  percentage: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
    color: '#2B2A4C' 
  }, 
  brand: {
    marginTop: 4,
    fontSize: 16, fontWeight: 'bold'
  },
  ratingView: {
    marginStart: -170,
  },
});