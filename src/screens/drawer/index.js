import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/actions/loginActions';

const DrawerContent = ({navigation}) => {
  const {logged} = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', marginTop: 40}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Новости</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('QrCodeScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>QR-generator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreatePhotoScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Сделать фото</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!logged}
        onPress={() => navigation.navigate('ProfileScreen')}
        style={[
          styles.linkContainer,
          {borderColor: !logged ? 'lightgray' : 'black'},
        ]}>
        <Text
          style={[styles.linkText, {color: !logged ? 'lightgray' : 'black'}]}>
          Профиль
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen');
          if (logged) {
            dispatch(logout());
          }
        }}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>{logged ? 'Выйти' : 'Войти'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  linkText: {
    fontSize: 24,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
export default DrawerContent;
