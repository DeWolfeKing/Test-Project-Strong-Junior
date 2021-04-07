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

const NewsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {newsData, isFetching} = useSelector(state => state.newsReducer);
  useEffect(() => {
    dispatch(fetchingNews());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <Image
            resizeMode={'contain'}
            style={styles.headerDrawerButton}
            source={require('../../assets/drawer.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerUserNameText}>username</Text>
      </View>
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
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  headerDrawerButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  headerUserNameText: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'right',
    flex: 1,
    marginRight: 20,
  },
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
