import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginFailed, loginSuccess} from '../../store/actions/loginActions';
import Header from '../../components/header';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const {successLogin, successPassword, error} = useSelector(
    state => state.loginReducer,
  );
  const login = () => {
    if (loginInput === successLogin) {
      if (passwordInput === successPassword) {
        dispatch(loginSuccess());
        navigation.navigate('NewsScreen');
      } else {
        dispatch(loginFailed());
      }
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header drawer />
      <View style={{marginHorizontal: 20, marginTop: 50}}>
        <TextInput
          value={loginInput}
          onChangeText={value => setLoginInput(value)}
          placeholder={'Имя'}
          style={styles.input}
        />
        <TextInput
          value={passwordInput}
          onChangeText={value => setPasswordInput(value)}
          placeholder={'Пароль'}
          style={styles.input}
        />
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => login()} style={styles.button}>
          <Text style={{color: 'white', fontSize: 24}}>ВХОД</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    fontSize: 24,
  },
  button: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: 20,
    marginHorizontal: 30,
    marginBottom: 30,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
  },
});
export default LoginScreen;
