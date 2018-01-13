import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {
  static navigationOptions = {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Here goes homepage</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
