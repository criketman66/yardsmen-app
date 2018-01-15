import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Button, Platform, ScrollView, Text, View } from 'react-native';

import { Styles } from '../../common';


class Login extends Component {
  static navigationOptions = {
    tabBarLabel: 'Login'
  }
  handlePress() {
      console.log('button clicked');
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Here goes Login form</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="Register"
        />
        <Button
          onPress={() => this.props.navigation.navigate('ForgotPass')}
          title="Forgotten Password"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}


export default Login;
