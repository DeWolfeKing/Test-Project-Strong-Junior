import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {calcHeight, calcWidth} from '../../utilits/dimensions';

const NewsDetailsScreen = props => {
  const navigation = useNavigation();
  const item = props.route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header drawer={false} />
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Image style={styles.image} source={{uri: item.urlToImage}} />
        <Text style={styles.contentText}>{item.content}</Text>
        <Text style={styles.contentText}>{item.source.name}</Text>
        <Text style={[styles.contentText, {marginBottom: calcWidth(40)}]}>
          {item.publishedAt}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentText: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontSize: 16,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});
export default NewsDetailsScreen;
