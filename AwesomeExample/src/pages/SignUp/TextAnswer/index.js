import React from 'react';
import {TextInput, Text, TouchableOpacity, Image} from 'react-native';

import componentStyle from './styles';

export default function TextAnswer(props) {
  return (
    <>
      <TextInput
        style={componentStyle.inputAnswer}
        autoCorrect={false}
        multiline={true}
        placeholder={'Digite aqui...'}
        placeholderTextColor="rgba(5, 207, 224,0.4)"
        onChangeText={props.setValue}
        value={props.value}
      />

      <Text style={componentStyle.errorMsg}>
        {props.error ? 'Resposta Incorreta!' : null}
      </Text>

      <TouchableOpacity onPress={props.sendAnswer}>
        <Image
          style={componentStyle.button}
          source={require('../../../assets/Login/Buttons/button_OK.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}
