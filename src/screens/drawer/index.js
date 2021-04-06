import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const DrawerContent = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', marginTop: 40}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Логин</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Новости</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>QR-generator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Сделать фото</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>Выйти</Text>
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
