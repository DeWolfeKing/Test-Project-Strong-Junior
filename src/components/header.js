import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {calcFontSize, calcHeight, calcWidth} from '../utilits/dimensions';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const {firstName, lastName} = useSelector(state => state.profileReducer);

  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {props.drawer ? (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <Image
            style={styles.headerDrawerImage}
            source={require('../assets/drawer.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Text style={styles.headerGoBackButton}>BACK</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.headerUserNameText}>
        {`${firstName} ${lastName}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  headerDrawerImage: {
    width: calcWidth(30),
    height: calcWidth(30),
    marginLeft: calcWidth(15),
  },
  headerUserNameText: {
    fontSize: calcFontSize(24),
    marginVertical: calcHeight(10),
    textAlign: 'right',
    flex: 1,
    marginRight: calcWidth(20),
  },
  headerGoBackButton: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default Header;
