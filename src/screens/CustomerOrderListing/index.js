import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles } from '../../common';

class CustomerOrderListing extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Orders',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-list-box-outline" size={30} color={tintColor} />
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>here goes customer order listing</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}


export default CustomerOrderListing;
