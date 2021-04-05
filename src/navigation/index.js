import LoginScreen from '../screens/login';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {store} from '../store';
import DrawerContent from '../screens/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Nav = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
            drawerStyle={{
                width: '85%',
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName="Home">
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
