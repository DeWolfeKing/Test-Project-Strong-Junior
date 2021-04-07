import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {calcFontSize, calcHeight, calcWidth} from '../../utilits/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {changeProfile} from '../../store/actions/profileActions';
import Header from '../../components/header';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {firstName, lastName} = useSelector(state => state.profileReducer);
  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);
  const [changeInputs, setChangeInputs] = useState(false);
  const setChanges = () => {
    if (changeInputs) {
      dispatch(
        changeProfile({
          firstName: firstNameInput,
          lastName: lastNameInput,
        }),
      );
    }
    setChangeInputs(!changeInputs);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header drawer />
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
          placeholder={'Фамилия'}
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
