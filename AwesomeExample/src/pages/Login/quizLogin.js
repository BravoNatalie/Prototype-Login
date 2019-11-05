import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import componentStyle from './styles';

export default function QuizLogin() {
  const [value, setValue] = useState('');
  const [answers, setAnswers] = useState([]);

  function okAnswer() {
    if (value.length > 0) {
      setAnswers([...answers, {text: value, key: Date.now()}]);
      setValue('');
    }
  }

  return (
    <View style={componentStyle.quizContainer}>
      <Text style={componentStyle.questionText}>Quem é você?</Text>
      <TextInput
        style={componentStyle.inputAnswer}
        placeholder={'Nome'}
        placeholderTextColor="rgba(5, 207, 224,0.4)"
        value={value}
        onChangeText={value => setValue(value)}
      />
      <TouchableOpacity onPress={() => okAnswer()}>
        <Image
          style={componentStyle.button}
          source={require('../../assets/Login/Buttons/button_OK.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
