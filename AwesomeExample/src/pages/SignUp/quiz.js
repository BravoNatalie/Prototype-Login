import React, {useState, useEffect, useRef} from 'react';
import {Text} from 'react-native';

import * as Animatable from 'react-native-animatable';

import componentStyle from './styles';

import TextAnswer from './TextAnswer/index';
import YesNoAnswer from './YesNoAnswer/index';
/* import MultipleChoiceAnswer from './MultipleChoiceAnswer/index';
 */

export default function Quiz() {
  const [value, setValue] = useState({});
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const viewRef = useRef(null);

  useEffect(() => requestQuestions(), []);

  const addr = '10.23.10.59';

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
