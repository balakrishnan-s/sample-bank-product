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
    color:'#C70039',
    fontWeight: '500' 
  },
  priceText: { 
    fontSize: 34,
    color:'#040D12',
    fontWeight: 'bold'
  },
  ratingView: {
    marginEnd: -40,
  },
  ratingTest: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#272829'
  },
  category: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: '500',
    color: '#272829'
  },
  title: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#12486B',
  },
  description: {
    marginTop: 8,
    fontSize: 16, 
    fontWeight: '500',
    color: '#352F44'
  },
  descriptionDeatils: {
    marginTop: 8,
    fontSize: 14, 
    fontWeight: '500',
    color: '#3F2E3E'
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
    fontWeight: 'bold',
    color: '#352F44'
  },
  stock: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '600',
    color: '#7A9D54'
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
