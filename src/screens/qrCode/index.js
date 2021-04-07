import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {calcFontSize, calcHeight, calcWidth} from '../../utilits/dimensions';
import Header from '../../components/header';

const QrCodeScreen = () => {
  const [qrCodeInput, setQrCodeInput] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header drawer />
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
              size={calcWidth(200)}
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
    padding: calcWidth(10),
    fontSize: calcFontSize(24),
  },
  qrCodeMissContainer: {
    borderColor: 'gray',
    width: calcWidth(200),
    height: calcWidth(200),
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
