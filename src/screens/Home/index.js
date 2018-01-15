import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from '../../common';
import styles from './styles';


class Home extends Component {
  static navigationOptions = {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
  }

  render() {
    return (
      <View style={[Styles.container, Styles.greyBackground]}>
        <Text>Here goes homepage</Text>
      </View>
    );
  }
}

export default Home;
