import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {calcFontSize, calcHeight, calcWidth} from '../../utilits/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {changeProfile} from '../../store/actions/profileActions';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {firstName, lastName, phoneNumber} = useSelector((state) => state.profileReducer);
  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);
  const [phoneNumberInput, setPhoneNumberInput] = useState(phoneNumber);
  const [changeInputs, setChangeInputs] = useState(false);
  const setChanges = () => {
    if (
      changeInputs &&
      (!firstNameInput || !lastNameInput || !phoneNumberInput)
    ) {
      console.warn('error');
    }
    if (changeInputs) {
      dispatch(
        changeProfile({
          firstName: firstNameInput,
          lastName: lastNameInput,
          phoneNumber: phoneNumberInput,
        }),
      );
    }
    setChangeInputs(!changeInputs);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <Image
            resizeMode={'contain'}
            style={styles.headerDrawerImage}
            source={require('../../assets/drawer.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerUserNameText}>username</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          editable={changeInputs}
          value={firstNameInput}
          onChangeText={value => setFirstNameInput(value)}
          placeholder={'Имя'}
          style={styles.input}
        />
        <TextInput
          editable={changeInputs}
          value={lastNameInput}
          onChangeText={value => setLastNameInput(value)}
          placeholder={'Имя'}
          style={styles.input}
        />
        <TextInput
          editable={changeInputs}
          value={phoneNumberInput}
          onChangeText={value => setPhoneNumberInput(value)}
          placeholder={'Имя'}
          style={styles.input}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => setChanges()} style={styles.button}>
          <Text style={styles.buttonText}>
            {!changeInputs ? 'Изменить данные' : 'Завершить изменение'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  headerUserNameText: {
    fontSize: calcFontSize(24),
    marginVertical: calcHeight(10),
    textAlign: 'right',
    flex: 1,
    marginRight: calcWidth(20),
  },
  headerDrawerImage: {
    width: calcWidth(40),
    height: calcWidth(40),
    marginLeft: calcWidth(10),
  },
  input: {
    marginBottom: calcHeight(10),
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    fontSize: calcFontSize(20),
  },
  contentContainer: {
    marginHorizontal: calcWidth(20),
    marginTop: calcHeight(50),
  },
  button: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: calcHeight(10),
    marginHorizontal: calcWidth(30),
    marginBottom: calcHeight(30),
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: calcFontSize(20),
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
});
export default ProfileScreen;
