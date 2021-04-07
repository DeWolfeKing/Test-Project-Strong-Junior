import LoginScreen from '../screens/login';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import DrawerContent from '../screens/drawer';
import NewsScreen from '../screens/news';
import NewsDetailsScreen from '../screens/newsDetails';
import ProfileScreen from '../screens/profile';
import {store, persistor} from '../store';
import {PersistGate} from 'redux-persist/integration/react';
import QrCodeScreen from '../screens/qrCode';
import CreatePhotoScreen from '../screens/creactePhoto';

const Drawer = createDrawerNavigator();

export const Nav = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{
              width: '85%',
            }}
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName="NewsScreen">
            <Drawer.Screen name="LoginScreen" component={LoginScreen} />
            <Drawer.Screen name="NewsScreen" component={NewsScreen} />
            <Drawer.Screen
              name="NewsDetailsScreen"
              component={NewsDetailsScreen}
            />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="QrCodeScreen" component={QrCodeScreen} />
            <Drawer.Screen name="CreatePhotoScreen" component={CreatePhotoScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
