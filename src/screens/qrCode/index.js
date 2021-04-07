import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {calcFontSize, calcHeight} from '../../utilits/dimensions';

const QrCodeScreen = () => {
  const navigation = useNavigation();
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  const [qrCodeInput, setQrCodeInput] = useState('');
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
      <View style={{flex: 1}}>
        <TextInput
          value={qrCodeInput}
          onChangeText={value => setQrCodeInput(value)}
          placeholder={'Строка'}
          style={styles.input}
        />
        <View style={styles.qrCodeContainer}>
          {qrCodeInput ? (
            <QRCode
              value={qrCodeInput}
              logo={{uri: base64Logo}}
              size={200}
              logoBackgroundColor="transparent"
            />
          ) : (
            <View style={styles.qrCodeMissContainer}>
              <Text style={styles.qrCodeMissText}>QR-Code</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: calcHeight(20),
    marginHorizontal: calcHeight(20),
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    fontSize: 24,
  },
  qrCodeMissContainer: {
    borderColor: 'gray',
    width: 200,
    height: 200,
    borderWidth: 1,
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
  },
  qrCodeMissText: {
    fontSize: calcFontSize(24),
    color: 'gray',
  },
  qrCodeContainer: {
    marginTop: calcHeight(100),
    flex: 1,
    alignItems: 'center',
  },
});
export default QrCodeScreen;
