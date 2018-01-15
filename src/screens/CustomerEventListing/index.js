import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Styles } from '../../common';

class CustomerEventListing extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Events',
    tabBarIcon: ({ tintColor }) => <Icon name="calendar" size={30} color={tintColor} />
  }
  render() {
    return (
      <View style={Styles.container}>
        <Text>here goes customer event listing</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}


export default CustomerEventListing;
