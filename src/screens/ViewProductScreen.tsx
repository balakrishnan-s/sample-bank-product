import React, { useEffect, useState } from 'react';
import { Alert, View, Text } from 'react-native';
import axios from 'axios';

const ViewProductScreen = ({ route, navigation }) => {
 // const [data, setData] = useState<any[]>([]); 

  useEffect(() => {
    const { id } = route.params;
    // Alert.alert('Alert Title', "id : "+JSON.stringify(id));
  }, []);

  return (
    <View>

    </View>
  );
};
export default ViewProductScreen;
