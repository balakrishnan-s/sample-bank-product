import React, { useState, useEffect } from "react";
import { 
  Text,
  View,
  Image 
} from "react-native"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './AccountScreen.style';
import User from '../model/User';
const AccountScreen = ({ route, navigation }) => { 
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key')! as string;
      const jsonData = JSON.parse(value);
      setUser(jsonData?.data); 
    } catch (e) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       {user?.image && <Image style={styles.image} source={{ uri: user?.image }} />}
        <Text style={styles.userName}>{user?.username}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.colunm} >
          <Text style={styles.labelText}>First Name</Text>
        </View>
        <View style={styles.colunm2} >
          <Text style={styles.valueText}>{user?.firstName}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colunm} >
          <Text style={styles.labelText}>Last Name</Text>
        </View>
        <View style={styles.colunm2} >
          <Text style={styles.valueText}>{user?.lastName}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colunm} >
          <Text style={styles.labelText}>Gender</Text>
        </View>
        <View style={styles.colunm2} >
          <Text style={styles.valueText}>{user?.gender}</Text>
        </View>
      </View>
      
      <View style={styles.row}>
        <View style={styles.colunm} >
          <Text style={styles.labelText}>Email</Text>
        </View>
        <View style={styles.colunm2} >
          <Text style={styles.valueText}>{user?.email}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.colunm} >
          <Text style={styles.labelText}>id</Text>
        </View>
        <View style={styles.colunm2} >
          <Text style={styles.valueText}>{user?.id}</Text>
        </View>
      </View>

    </View>
  );
};

export default AccountScreen;
