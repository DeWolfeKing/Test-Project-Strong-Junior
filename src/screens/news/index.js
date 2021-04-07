import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingNews} from '../../store/actions/newsActions';
import {useNavigation} from '@react-navigation/native';
import {calcFontSize, calcWidth} from '../../utilits/dimensions';
import Header from '../../components/header';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {newsData, isFetching} = useSelector(state => state.newsReducer);
  useEffect(() => {
    dispatch(fetchingNews());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header drawer />
      {isFetching ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <ScrollView style={styles.contentContainer}>
          {newsData.map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewsDetailsScreen', item)}
              style={styles.newsContainer}>
              <Image style={styles.newsImage} source={{uri: item.urlToImage}} />
              <Text style={styles.newsText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginHorizontal: calcWidth(5),
  },
  newsContainer: {
    flexDirection: 'row',
    marginBottom: calcWidth(10),
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  newsImage: {
    width: calcWidth(80),
    height: calcWidth(80),
  },
  newsText: {
    marginHorizontal: calcWidth(30),
    fontSize: calcFontSize(16),
    flex: 1,
  },
  activityIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default NewsScreen;
