import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {SafeAreaView} from 'react-native';

const QrCodeScreen = () => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <SafeAreaView style={{flex: 1}}>
      <QRCode
        value="Just some string value"
        logo={{uri: base64Logo}}
        logoSize={30}
        logoBackgroundColor="transparent"
      />
    </SafeAreaView>
  );
};

export default QrCodeScreen;
