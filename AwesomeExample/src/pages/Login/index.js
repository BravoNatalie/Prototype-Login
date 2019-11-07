import React from 'react';

import {
  Text,
  Image,
  ImageBackground,
  StatusBar,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import componentStyle from './styles';
import color from '../../styles/colors';

import QuizLogin from './quizLogin';

const Login = () => (
  <KeyboardAvoidingView style={componentStyle.container}>
    <StatusBar barStyle="light-content" backgroundColor={color.primary} />
    <ImageBackground
      source={require('../../assets/Login/Fundo/fundo.png')}
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
    </View>
  </KeyboardAvoidingView>
);

export default Login;
