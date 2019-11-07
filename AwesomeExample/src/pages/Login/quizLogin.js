import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import componentStyle from './styles';

function YesNoAnswer(props) {
  return (
    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity>
        <Image
          style={componentStyle.button}
          source={require('../../assets/Login/Buttons/button_sim.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={componentStyle.button}
          source={require('../../assets/Login/Buttons/button_nao.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

function MultipleChoiceAnswer() {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={componentStyle.multipleChoiseButton}
          source={require('../../assets/Login/Buttons/fundo_alternativas_1.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text>blabla</Text>
    </View>
  );
}

function TextAnswer(props) {
  return (
    <>
      <TextInput
        style={componentStyle.inputAnswer}
        placeholder={'Digite aqui...'}
        placeholderTextColor="rgba(5, 207, 224,0.4)"
        value={props.value}
        onChangeText={props.setValue}
      />
      <TouchableOpacity onPress={props.okAnswer}>
        <Image
          style={componentStyle.button}
          source={require('../../assets/Login/Buttons/button_OK.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}

export default function QuizLogin() {
  const [value, setValue] = useState('');
  const [answers, setAnswers] = useState([]);

  function okAnswer() {
    if (value.length > 0) {
      setAnswers([...answers, {text: value, key: Date.now()}]);
      setValue('');
      console.warn(answers);
    }
  }

  return (
    <View style={componentStyle.quizContainer}>
      <Text style={componentStyle.questionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </Text>
      {/* <TextAnswer
        value={value}
        setValue={value => setValue(value)}
        okAnswer={() => okAnswer()}
      /> */}
      {/* <YesNoAnswer /> */}
      <MultipleChoiceAnswer />
    </View>
  );
}
