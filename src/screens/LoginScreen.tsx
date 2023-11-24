import React, { useState } from "react";
import { 
  Text,
  View, 
  TextInput, 
  TouchableOpacity,
  Alert, 
} from "react-native";
import { styles } from './LoginScreen.style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('kminchelle');
  const [password, setPassword] = useState("0lelplR");
  const [diableLogin, setDiableLogin] = useState(false);

  const login = () => { 
    setDiableLogin(true);
    const loginUser = async () => {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: userName,
        password: password
      })
        .then(function (response) { 
          try {
             AsyncStorage.setItem('my-key',JSON.stringify( response));
          } catch (error) { 
            console.log(error);
          } 
          setDiableLogin(false); 
          navigateToHome();
        })
        .catch(function (error) { 
          console.log(error);
          setDiableLogin(false);
        }); 
    };
    loginUser();
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name."
          placeholderTextColor="#003f5c"
          onChangeText={(userName) => setUserName(userName)}
          value={userName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
       
      <TouchableOpacity style={styles.loginBtn}>
        <Text onPress={login} disabled={diableLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
