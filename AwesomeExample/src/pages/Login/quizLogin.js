import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import componentStyle from './styles';
import * as Animatable from 'react-native-animatable';

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
    {id: 'A', text: 'blablablabla'},
    {id: 'B', text: 'Lorem ipsum dolor'},
    {id: 'C', text: 'aaaaaaaaaaaa'},
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
              <Text
                style={componentStyle.multipleChoiseResponseText}
                key={response.id}>
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
              <Text
                style={componentStyle.multipleChoiseResponseText}
                key={response.id}>
                {response.text}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

/* function Show(questions) {
  const listQuestions = [
    {
      id: '1',
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
    {
      id: '2',
      type: 'multiplechoise',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
    {
      id: '3',
      type: 'yesno',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    },
  ];

  const questionModule = listQuestions.map(function(question) {
    <Text style={componentStyle.questionText} key={question.id}>
      {question}
    </Text>;
    if (question.type === 'text') {
      return (
        <TextAnswer
          value={value}
          setValue={value => setValue(value)}
          okAnswer={() => okAnswer()}
        />
      );
    } else if (question.type === 'yesno') {
      return <YesNoAnswer />;
    } else {
      return <MultipleChoiceAnswer />;
    }
  });

  return {questionModule};
} */

function TextAnswer(props) {
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
          source={require('../../assets/Login/Buttons/button_OK.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </>
  );
}

export default function QuizLogin() {
  const [value, setValue] = useState({});
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const viewRef = useRef(null);

  useEffect(() => requestQuestions(), []);

  const addr = '10.23.96.4';

  /*  function initLogin() {
    const uri = 'http://10.23.10.45:8000/api/auth/customers/login';

    const request = {
      method: 'POST',
      body: JSON.stringify({
        nome: 'customer1',
      }),
    };

    fetch(uri, request)
      .then(response => response.json())
      .then(response => setQuestions(response))
      .done();
  } */

  function requestQuestions() {
    const uri = `http://${addr}:8000/api/auth/quiz/questions`;

    const request = {
      method: 'GET',
    };

    fetch(uri, request)
      .then(response => response.json())
      .then(response => setQuestions(response))
      .catch(e => console.error(e));
  }

  function sendAnswer(text, isLast) {
    console.log(isLast);
    if (JSON.stringify(text) === JSON.stringify({})) {
      bounce();
      return null;
    }

    const uri = `http://${addr}:8000/api/auth/quiz/login`;
    console.log(text);
    const request = {
      method: 'POST',
      body: JSON.stringify({
        answer: text.answer,
        question_id: text.question_id,
      }),
    };

    fetch(uri, request)
      .then(response => {
        if (response.ok) return response;
        else {
          let error = new Error();
          error.sender = 'validationError';
          throw error;
        }
      })
      .then(response => response.json())
      .then(response => {
        setAnswers([
          ...answers,
          {answer: text.answer, question_id: text.question_id},
        ]);
        setValue({});
        setError(false);
        setActiveQuestionIndex(activeQuestionIndex + 1);
        if (isLast) console.log('última');
      })
      .catch(e => {
        if (e.sender === 'validationError') {
          setActiveQuestionIndex(0);
          setError(true);
          setValue({});
          bounce();
        } else {
          console.error(e);
        }
      });
  }

  function bounce() {
    viewRef.current.bounce(800);
  }

  const questionsLength = questions.length;

  return (
    <>
      {questions.map(
        (quest, index) =>
          activeQuestionIndex === index && (
            <Animatable.View
              ref={viewRef}
              style={componentStyle.quizContainer}
              key={quest.id}>
              <Text style={componentStyle.questionText}>{quest.title}</Text>
              <TextAnswer
                setValue={text =>
                  setValue({answer: text, question_id: quest.id})
                }
                sendAnswer={
                  questionsLength == index + 1
                    ? () => sendAnswer(value, true)
                    : () => sendAnswer(value, false)
                }
                value={value.answer}
                setError={() => setError(true)}
                error={error}
                viewRef={viewRef}
              />
            </Animatable.View>
          ),
      )}
      {activeQuestionIndex == questionsLength ? (
        <Animatable.View ref={viewRef} style={componentStyle.quizContainer}>
          <Text style={componentStyle.questionText}>Você é Fulano?</Text>
          <YesNoAnswer />
        </Animatable.View>
      ) : null}
    </>
  );
}
