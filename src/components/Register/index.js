import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Styles } from '../../common';


class Register extends Component {
  static navigationOptions = {
    tabBarLabel: 'Register'
  }
  handlePress() {
      console.log('button clicked');
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Here goes Register form</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
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


export default Register;
