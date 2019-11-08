import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
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
  const responses = [
    {'id': 'A', 'text': 'blablablabla'},
    {'id': 'B', 'text': 'Lorem ipsum dolor'},
    {'id': 'C', 'text': 'aaaaaaaaaaaa'},
  ];

  return (
    <ScrollView style={componentStyle.multipleChoiseContainer}>
      {responses.map(response => (
        <TouchableOpacity style={componentStyle.multipleChoiseView}>
          <View style={componentStyle.multipleChoiseButtonA}>
            <Image
              source={require('../../assets/Login/Buttons/fundo_alternativas_1_option.png')}
              style={componentStyle.multipleChoiseButtonImage}
              resizeMode="center"
            />
            <View style={componentStyle.multipleChoiseButtonText}>
              <Text style={componentStyle.multipleChoiseResponseText}>
                {response.id}
              </Text>
            </View>
          </View>
          <View style={componentStyle.multipleChoiseButtonB}>
            <Image
              source={require('../../assets/Login/Buttons/fundo_alternativas_1_body.png')}
              style={componentStyle.multipleChoiseButtonImage}
              resizeMode="contain"
            />
            <View style={componentStyle.multipleChoiseButtonText}>
              <Text style={componentStyle.multipleChoiseResponseText}>
                {response.text}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
