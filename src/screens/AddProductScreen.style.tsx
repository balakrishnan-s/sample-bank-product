import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding : 16
  },
  input: {
    height: 40,
    marginBottom: 10, 
    marginTop: 2,
    padding: 2,  
    borderBottomWidth : 1,
    borderColor: 'gray'
  },
  lable: {
    marginTop: 8,
    fontSize: 16, 
    fontWeight: '500',
    color: '#352F44'
  },
  description: {
    height: 100,
    marginBottom: 10, 
    textAlign: 'left',
    justifyContent: "flex-start",
    alignContent: 'flex-start',
    marginTop: 2,
    padding: 2,  
    borderBottomWidth : 1,
    borderColor: 'gray'
  },
});
