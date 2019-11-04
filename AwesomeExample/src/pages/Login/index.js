import React from 'react';

import {
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//import componentStyle from './styles';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Login = () => (
  <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
    <StatusBar barStyle="light-content" backgroundColor="#05CFE0" />
    <ImageBackground
      source={require('../../assets/Login/Fundo/fundo.png')}
      style={{
        flex: 0.455,
        resizeMode: 'contain',
        justifyContent: 'space-between',
      }}>
      <Image
        style={{alignSelf: 'center', width: screenWidth * 0.25}}
        source={require('../../assets/Login/Header/header_login.png')}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/Login/Logotipo/logotipo_mi.png')}
        style={{
          flex: 1,
          height: undefined,
          width: undefined,
          marginHorizontal: '10%',
        }}
        resizeMode="contain"
      />
      <Image
        style={{
          alignSelf: 'center',
          width: screenWidth * 0.12,
          flex: 1,
          bottom: -40,
        }}
        source={require('../../assets/Login/Symbol/simbolo_mi.png')}
        resizeMode="contain"
      />
    </ImageBackground>
    <View
      style={{
        flex: 0.545,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontFamily: 'Lato',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#05CFE0',
          marginTop: 40,
        }}>
        Quem é você?
      </Text>
      <TextInput
        style={{
          marginTop: '15%',
          fontFamily: 'Lato',
          fontSize: 15,
          color: '#05CFE0',
          borderRadius: 25,
          paddingHorizontal: '30%',
          paddingVertical: '7%',
          backgroundColor: 'rgba(5, 207, 224,0.1)',
        }}
        placeholder={'Nome'}
        placeholderTextColor="rgba(5, 207, 224,0.4)"
      />
      <TouchableOpacity>
        <Image
          style={{width: screenWidth * 0.12}}
          source={require('../../assets/Login/Buttons/button_OK.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default Login;
