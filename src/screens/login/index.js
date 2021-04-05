import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/actions/loginAction';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {is_Log} = useSelector(state => state.loginReducer);
  useEffect(() => {
    dispatch(login());
  },[]);
  return (
    <View>
      <Text>{`logined : ${is_Log}`}</Text>
    </View>
  );
};

export default LoginScreen;
