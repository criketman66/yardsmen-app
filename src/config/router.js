import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Login, Register, ForgotPass } from '../components';
import { CustomerDashboard, CustomerEventListing, CustomerOrderListing } from '../screens';
import { Styles } from '../common';

export const ProfileTabs = TabNavigator({
  CustomerDashboard: {
    screen: CustomerDashboard
  },
  CustomerEventListing: {
    screen: CustomerEventListing
  },
  CustomerOrderListing: {
    screen: CustomerOrderListing
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: Styles.footerLabel,
    showIcon: true,
    style: Styles.footer
  }
});

export const Drawer = DrawerNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  ForgotPass: {
    screen: ForgotPass
  },
  Profile: {
    screen: ProfileTabs
  }
}, {
  initialRouteName: 'Login',
  drawerPosition: 'left'
});
