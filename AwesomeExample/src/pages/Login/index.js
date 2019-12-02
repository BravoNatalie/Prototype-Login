import React from 'react';

import {
  Image,
  ImageBackground,
  StatusBar,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import componentStyle from './styles';
import color from '../../styles/colors';

import QuizLogin from './quizLogin';
import FingerPrintLogin from '../Teste/fingerprintLogin';

const Login = () => (
  <View style={{flex: 1}}>
    <KeyboardAvoidingView
      style={componentStyle.container}
      contentContainerStyle={{flex: 1}}
      behavior="position">
      <StatusBar barStyle="light-content" backgroundColor={color.primary} />
      <ImageBackground
        source={require('../../assets/Login/Fundo/novo/fundo.png')}
        style={componentStyle.imageContainer}>
        <Image
          style={componentStyle.loginHeader}
          source={require('../../assets/Login/Header/header_login.png')}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/Login/Logotipo/logotipo_mi.png')}
          style={componentStyle.logo}
          resizeMode="contain"
        />
        <Image
          style={componentStyle.icon}
          source={require('../../assets/Login/Symbol/simbolo_mi.png')}
          resizeMode="contain"
        />
      </ImageBackground>
      <View style={componentStyle.textContainer}>
        <QuizLogin />
        {/*  <FingerPrintLogin /> */}
      </View>
    </KeyboardAvoidingView>
  </View>
);

export default Login;
