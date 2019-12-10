import React from 'react';
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';

import componentStyle from './styles';

export default function MultipleChoiceAnswer() {
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
              source={require('../../../assets/Login/Buttons/fundo_alternativas_1_option.png')}
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
              source={require('../../../assets/Login/Buttons/fundo_alternativas_1_body.png')}
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
