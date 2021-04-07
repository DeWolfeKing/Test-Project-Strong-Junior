import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';
import {uploadPhoto} from '../../store/actions/photoActions';
import {calcHeight, calcWidth} from '../../utilits/dimensions';
import {useNavigation} from '@react-navigation/native';
const CreatePhotoScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [camera, setCamera] = useState(null);
  const [openCameraValue, setOpenCameraValue] = useState(false);
  const [photo, setPhoto] = useState(null);
  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setPhoto(`data:image/jpeg;base64,${data.base64}`);
    dispatch(uploadPhoto({imageUri: photo}));
    setOpenCameraValue(!openCameraValue);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <Image
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
      {openCameraValue ? (
        <RNCamera
          ref={setCamera}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}>
          <View style={styles.snapButton}>
            <TouchableOpacity
              onPress={() => takePicture(camera)}
              style={styles.capture}>
              <Text style={styles.snapButtonText}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      ) : (
        <View style={styles.contentContainer}>
          <Image style={styles.completeImage} source={{uri: photo}} />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpenCameraValue(!openCameraValue)}>
              <Text style={styles.buttonText}>Сделать фото</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  button: {
    flex: 1,
    borderRadius: 30,
    paddingVertical: calcHeight(20),
    marginHorizontal: calcWidth(30),
    marginTop: calcHeight(30),
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeImage: {
    width: calcWidth(300),
    height: calcWidth(300),
  },
  snapButton: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  snapButtonText: {
    fontSize: 14,
  },
});

export default CreatePhotoScreen;
