import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Styles } from '../../common';


class ForgotPass extends Component {
  static navigationOptions = {
    tabBarLabel: 'Forgotten Password'
  }
  handlePress() {
      console.log('button clicked');
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Here goes Forgotten Password form</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="Register"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />        
      </View>
    );
  }
}


export default ForgotPass;
