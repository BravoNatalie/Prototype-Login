import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

import color from '../../../styles/colors';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: color.primary}}>Esperando...</Text>
  </View>
);

export default function TakePhoto({navigation}) {
  const [photo, setPhoto] = useState({});

  /* const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    navigation.navigate('PreviewPhoto', {photo: photo});
  }); */

  async function takePicture(camera) {
    camera.pausePreview();
    const options = {quality: 0.5, base64: true};
    camera.resumePreview();
    const uri = await camera.takePictureAsync(options);
    console.log('pause');
    camera.resumePreview();
    setPhoto(JSON.stringify(uri));
    navigation.navigate('PreviewPhoto', {photo: uri});
  }

  function gotoPreviewPhoto() {
    if (photo.length > 0) navigation.navigate('PreviewPhoto', {photo: photo});
  }

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
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

TakePhoto.navigationOptions = {
  title: 'TakePhoto',
};
