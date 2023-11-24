import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: "90%",
    height: 65,
  },
  imageView: { 
    width: "100%", 
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "#d0d0d0",
    borderRadius: 30,
    width: "90%",
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
    width: "90%", 
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40, 
    backgroundColor: '#00aedb'
  },
  loginText: { 
    fontSize: 16, 
    fontWeight: '800',
    color: '#352F44'
  },
});
