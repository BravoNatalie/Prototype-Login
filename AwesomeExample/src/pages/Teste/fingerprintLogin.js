import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, TouchableHighlight, View, Image, Text} from 'react-native';

import color from '../../styles/colors';

import TouchID from 'react-native-touch-id';

function authenticate() {
  const optionalConfigObject = {
    title: 'Autenticação Requerida',
    sensorDescription: 'Toque o sensor',
    sensorErrorDescription: 'Falha',
    cancelText: 'Cancelar',
  };
  TouchID.authenticate('', optionalConfigObject)
    .then(success => {
      Alert.alert('Autenticação com sucesso!');
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Erro de autenticação!');
    });
}

export default function FingerPrintLogin() {
  const [biometryType, setBiometryType] = useState(null);

  useEffect(
    () => async () => {
      await TouchID.isSupported().then(biometryType => {
        setBiometryType(biometryType);
      });
    },
    [],
  );

  function clickHandler() {
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        Alert.alert('TouchID não é suportado!');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clique para fazer o Login</Text>
      <TouchableHighlight
        underlayColor="rgba(5, 207, 224,0.1)"
        onPress={() => clickHandler()}
        activeOpacity={1}>
        <Image style={styles.button} source={require('./fingerprint.png')} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primary,
    textAlign: 'center',
    marginBottom: 30,
  },
});
