import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login';

const Stack = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LOGIN_SCREEN" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
