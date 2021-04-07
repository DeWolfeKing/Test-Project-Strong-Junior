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

const NewsDetailsScreen = props => {
  const navigation = useNavigation();
  const item = props.route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Text style={styles.headerGoBackButton}>BACK</Text>
        </TouchableOpacity>
        <Text style={styles.headerUserNameText}>username</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <Image style={styles.image} source={{uri: item.urlToImage}} />
        <Text style={styles.contentText}>{item.content}</Text>
        <Text style={styles.contentText}>{item.source.name}</Text>
        <Text style={styles.contentText}>{item.publishedAt}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  headerUserNameText: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'right',
    flex: 1,
    marginRight: 20,
  },
  headerGoBackButton: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
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
