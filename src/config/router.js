import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import About from '../screens/About';
import Services from '../screens/Services';
import Contact from '../screens/Contact';

export const Tabs = TabNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Services: {
    screen: Services
  },
  Contact: {
    screen: Contact
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 14
    }
  }
});
