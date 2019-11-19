import React, {Component, useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

/* export default function ExampleView() {
  const handleViewRef = useRef(null);

  const bounce = () =>
    handleViewRef.current
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'),
      );

  return (
    <View>
      <Animatable.View ref={handleViewRef}>
        <TextInput placeholder="bouce me ..." />
        <Button title="click" onPress={() => bounce()} />
      </Animatable.View>
    </View>
  );
} */

/* efetuaLogin() {
    const uri = 'http://10.23.10.59:8000/api/auth/customers/login';

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        email: 'customer1@mi.me',
        password: '12345678',
      }),
    };

    fetch(uri, requestInfo)
      .then(response => response.json())
      .then(response => console.log(response))
      .done();
  } */

export default function Post() {
  useEffect(() => requestQuestions(), []);

  const addr = '10.23.10.59';

  function requestQuestions() {
    const uri = `http://${addr}:8000/api/auth/quiz/questions`;

    const request = {
      method: 'GET',
    };

    fetch(uri, request)
      .then(response => response.json())
      .then(response => setQuestions(response))
      .done();
  }

  const [value, setValue] = useState({});
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const objeto = {text: 'Olá!', id: 1};

  function ola(value) {
    console.warn(value.text + ' ' + value.id);
  }

  function sendAnswer(error) {
    if (error) handleViewRef.current.bounce(800);
    else {
      setActiveQuestion(activeQuestion + 1);
    }
  }

  const handleViewRef = useRef(null);

  const bounce = () => handleViewRef.current.bounce(800);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFF', justifyContent: 'center'}}>
      {questions.map(
        (quest, index) =>
          activeQuestion === index && (
            <Animatable.View ref={handleViewRef}>
              <Text key={quest.id}>{quest.title}</Text>
              <TextInput placeholder="digite aqui..." />
              <Button title="click" onPress={() => sendAnswer(true)} />
            </Animatable.View>
          ),
      )}
      {activeQuestion == 3 ? (
        <>
          <Text>{objeto.text}</Text>
          <Child
            ola={() => ola(value)}
            setValue={text => setValue({text: text, id: objeto.id})}
          />
        </>
      ) : null}
    </View>
  );
}

function Child(props) {
  return (
    <View>
      <TextInput placeholder="digite aqui..." onChangeText={props.setValue} />
      <Button title="Login" onPress={props.ola} />
    </View>
  );
}
