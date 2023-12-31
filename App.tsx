import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as AntProvider } from '@ant-design/react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import AccountScreen from './src/screens/AccountScreen';
import ProductScreen from './src/screens/ProductScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import ViewProductScreen from './src/screens/ViewProductScreen';
import LoginScreen from './src/screens/LoginScreen';
import { AppProvider } from './src/context/AppContext';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
    <Stack.Screen name="AddProduct" component={AddProductScreen} />
    <Stack.Screen name="ViewProductScreen" component={ViewProductScreen} />
  </Stack.Navigator>
);
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
const App = () => (
  <AntProvider>
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  </AntProvider>
);

export default App;