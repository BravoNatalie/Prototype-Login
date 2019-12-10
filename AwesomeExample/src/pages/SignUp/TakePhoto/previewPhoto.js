import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export default function PreviewPhoto({navigation}) {
  return (
    <View>
      <Text>Deseja tirar outra foto?</Text>
      <Text>{'photo: ' + JSON.stringify(navigation.state.params)}</Text>
    </View>
  );
}

PreviewPhoto.navigationOptions = {
  title: 'PreviewPhoto',
};
