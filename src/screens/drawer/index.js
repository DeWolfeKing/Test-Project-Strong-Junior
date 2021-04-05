import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/actions/loginAction';

const DrawerContent = () => {
    return (
        <View style={{flex:1,backgroundColor: 'red'}}>
            <Text>DRAWER</Text>
        </View>
    );
};

export default DrawerContent;
