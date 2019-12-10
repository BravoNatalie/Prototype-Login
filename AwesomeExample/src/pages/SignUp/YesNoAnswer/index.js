import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import componentStyle from './styles';

export default function YesNoAnswer(props) {
  return (
    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity>
        <Image
          style={componentStyle.button}
          source={require('../../../assets/Login/Buttons/button_sim.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={componentStyle.button}
          source={require('../../../assets/Login/Buttons/button_nao.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
