import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

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

  const addr = '10.23.96.160';

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
  const [question, setQuestion] = useState();
  const [activeQuestion, setActiveQuestion] = useState(0);

  const objeto = {text: 'Olá!', id: 1};

  function ola(value) {
    console.warn(value.text + ' ' + value.id);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFFF', justifyContent: 'center'}}>
      {questions.map(
        (quest, index) =>
          activeQuestion === index && (
            <>
              <Text key={quest.id}>{quest.title}</Text>
              <Button
                title="click"
                onPress={() => setActiveQuestion(activeQuestion + 1)}
              />
            </>
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
