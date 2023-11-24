import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#d0d0d0"
  },
  inputView: {
    backgroundColor: "#d0d0d0",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00aba9",
  },
  userName: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ab2c2c',
  },
  row: {
    flexDirection: 'row',
    marginTop:10
  },
  colunm: {
    flex: 1,  
  },
  colunm2: {
    flex: 2,  
  },
  labelText: { 
    fontSize: 24,
    fontWeight: '500', 
    color: '#000000',
  },
  valueText: { 
    fontSize: 24,
    fontWeight: 'bold', 
    color: '#12486B',
  },
});
