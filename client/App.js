import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login/Login'
import Signup from './screen/Signup/Signup'
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import ARScreen from './screen/ARScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllProducts from './screen/AllProducts/AllProducts';

const Stack = createNativeStackNavigator();

const isLoggedIn = async () => {
  let usr = await AsyncStorage.getItem('user');
  return usr?.success ? true : false;
}

const App = () => {
  const options = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={options}>

        {!isLoggedIn() ? <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} /></> : null
        }
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="ARScreen" component={ARScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
