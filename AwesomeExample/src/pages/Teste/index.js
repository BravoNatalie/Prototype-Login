import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Post extends Component {
  efetuaLogin() {
    const uri = 'http://10.23.10.45:8000/api/auth/customers/login';

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
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFF', justifyContent:'center'}}>
        <Button title="Login" onPress={() => this.efetuaLogin()} />
      </View>
    );
  }
}
