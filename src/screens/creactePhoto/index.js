import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';
import {uploadPhoto} from '../../store/actions/photoActions';
const CreatePhotoScreen = () => {
  const dispatch = useDispatch();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(`data:image/png;base64,${data.base64}`);
    dispatch(uploadPhoto({imageUri: `data:image/png;base64,${data.base64}`}));
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={setCamera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => takePicture(camera)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
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
});

export default CreatePhotoScreen;
