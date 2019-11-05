import React from 'react';

import {
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import componentStyle from './styles';
import color from '../../styles/colors';

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
      <Text style={componentStyle.questionText}>Quem é você?</Text>
      <TextInput
        style={componentStyle.inputAnswer}
        placeholder={'Nome'}
        placeholderTextColor="rgba(5, 207, 224,0.4)"
      />
      <TouchableOpacity>
        <Image
          style={componentStyle.button}
          source={require('../../assets/Login/Buttons/button_OK.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);

export default Login;
