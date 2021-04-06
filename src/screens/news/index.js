import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingNews} from '../../store/actions/newsActions';
import {useNavigation} from '@react-navigation/native';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {newsData, isFetching, error} = useSelector(state => state.newsReducer);
  useEffect(() => {
    // dispatch(fetchingNews());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <Image
            resizeMode={'contain'}
            style={{width: 40, height: 40, marginLeft: 10}}
            source={require('../../assets/drawer.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            marginVertical: 10,
            textAlign: 'right',
            flex: 1,
            marginRight: 20,
          }}>
          username
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        {newsData.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetailsScreen', item)}
            style={{flexDirection: 'row'}}>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: item.urlToImage}}
            />
            <Text style={{marginHorizontal: 30, fontSize: 16, flex: 1}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
