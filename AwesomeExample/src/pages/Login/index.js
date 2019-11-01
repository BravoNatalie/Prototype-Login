import React from 'react';

import {
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  View,
} from 'react-native';

//import componentStyle from './styles';
import {TextInput} from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Login = () => (
  <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
    <StatusBar barStyle="light-content" backgroundColor="#05CFE0" />
    <View style={{flex: 2}}>
      <ImageBackground
        source={require('../../assets/Login/Fundo/fundo.png')}
        style={{width: screenWidth}}>
        {/* <Image
        style={{}}
        source={require('../../assets/Login/Logotipo/logotipo_mi.png')}
        resizeMode="contain"
      />
      <Image 
        style={{}}
        source={require('../../assets/Login/Header/header_login.png')}
      />
      <Image
        style={{}}
        source={require('../../assets/Login/Symbol/simbolo_mi.png')}
      /> */}
      </ImageBackground>
    </View>
    <View style={{flex: 3, alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: 'Lato',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#05CFE0',
        }}>
        Quem é você?
      </Text>
      <TextInput
        style={{
          marginTop: 10,
          fontFamily: 'Lato',
          fontSize: 15,
          color: '#05CFE0',
        }}
        placeholder={'Nome'}
        placeholderTextColor="rgba(5, 207, 224,0.4)"
      />
      <TouchableOpacity>
        <Image
          style={{marginTop: 70, height: 50, width: 50}}
          source={require('../../assets/Login/Buttons/button_OK.png')}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default Login;
