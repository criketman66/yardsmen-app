import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from '../../common';

class CustomerDashboard extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Profile',
    tabBarIcon: ({ tintColor }) => <Icon name="file-text" size={30} color={tintColor} />
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text>here goes customer dashboard</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}


export default CustomerDashboard;
