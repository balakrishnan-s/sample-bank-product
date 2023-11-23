import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  ratingTopView: { 
    flexDirection: 'row',  
    marginEnd: -80, 
  },

  priceView: { 
    flexDirection: 'row',  
    marginTop: 10, 
    alignItems:'center',
    justifyContent:'flex-start'
  },
  discountText: { 
    fontSize: 16,
    color:'red'
  },
  priceText: { 
    fontSize: 34,
    color:'black',
    fontWeight: 'bold'
  },
  ratingView: {
    marginEnd: -40,
  },
  ratingTest: {
    marginTop: 5,
    fontSize: 14,
  },
  category: {
    marginTop: 0,
    fontSize: 16
  },
  title: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
  },
  description: {
    marginTop: 8,
    fontSize: 16, 
    fontWeight: '800' 
  },
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
  },
  mrpPrice: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '600' 
  },
  brand: {
    marginTop: 4,
    fontSize: 20, 
    fontWeight: 'bold'
  },
  stock: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '600'
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    backgroundColor: '#EEF5FF'
  },
  dummyImage: {
    height: 300,
    alignSelf: 'stretch',
  },
  datailsImage: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    height: 300,
    backgroundColor: '#EEF5FF'
  },
});
