import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator, DrawerNavigator, StackNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

//Tab Navigator Screens
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyRentalsScreen from '../screens/MyRentalsScreen';
import MyRigsScreen from '../screens/MyRigsScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MyBalance from '../screens/MyBalance';
import MenuList from '../components/MenuList';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

//Styles
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';

//var theme = theme;

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-home`: 'md-home' } />),
};

const MyRentalsStack = createStackNavigator({
  MyRentals: MyRentalsScreen,
});

MyRentalsStack.navigationOptions = {
  tabBarLabel: 'My Rentals',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-hammer' : 'md-hammer'} />),
  drawerIcon: ({focused}) => (<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-home`: 'md-home' } />),
};

const MyRigsStack = createStackNavigator({
  MyRigs: MyRigsScreen,
});

MyRigsStack.navigationOptions = {
  tabBarLabel: 'My Rigs',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} />),
  drawerIcon: ({ focused }) => (<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-home`: 'md-home' } />),
};

const MyAccountStack = createStackNavigator({
  MyAccount: MyAccountScreen,
});

MyAccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />),
  drawerIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />),
};

const SearchScreenStack = createStackNavigator({
  Search: SearchScreen,
});

SearchScreenStack.navigationOptions = {
  tabBarLabel: 'Search Rigs',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />),
  drawerIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />),
};

const LoginScreenStack = createStackNavigator({
  Login: LoginScreen,
})

LoginScreenStack.navigationOptions = {
  tabBarLabel: 'Log Out',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'} />),
  drawerIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'} />),
};

const SettingsScreenStack = createStackNavigator({
  screen: SettingsScreen,
})

SettingsScreenStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />),
  drawerIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />),
}

const MyBalanceStack = createStackNavigator({
  screen: MyBalance,
})

MyBalanceStack.navigationOptions = {
  tabBarLabel: 'Balance',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'logo-bitcoin' : 'logo-bitcoin'} />),
  drawerIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'logo-bitcoin' : 'logo-bitcoin'} />),
}

const BottomTab = createMaterialBottomTabNavigator({
  MyRentals:{screen: MyRentalsScreen, navigationOptions: MyRentalsStack.navigationOptions},
  MyRigs: {screen: MyRigsScreen, navigationOptions: MyRigsStack.navigationOptions},
}, {
  shifting: true,
  //activeColor: "#f34541",
  initialRouteName: 'MyRentals',
  activeTintColor: '#f0edf6',
  inactiveColor: '#2F3136',
  barStyle: { backgroundColor: themes[theme]['foregroundColor'] },
})

const Drawer = createDrawerNavigator({
  Home: {screen: BottomTab, navigationOptions: MyRentalsStack.navigationOptions},
  Search: {screen: SearchScreen, navigationOptions: SearchScreenStack.navigationOptions },
  Balance: {screen: MyBalance, navigationOptions: MyBalanceStack.navigationOptions},
  Account: {screen: MyAccountScreen, navigationOptions: MyAccountStack.navigationOptions},
  Settings: {screen: SettingsScreen, navigationOptions: SettingsScreenStack.navigationOptions},
  LogOut: {screen: LoginScreen, navigationOptions: LoginScreenStack.navigationOptions},
}, {
  drawerBackgroundColor: themes[theme]['backgroundColor'],
  contentOptions: {
    activeTintColor: themes[theme]['color'],
    inactiveTintColor: themes[theme]['secondaryFadedColor'],
  }
})

export default Drawer


/*** deprecated
export default createMaterialBottomTabNavigator({
  //Home: {screen: HomeScreen, navigationOptions: HomeStack.navigationOptions},
  MyRentals:{screen: MyRentalsScreen, navigationOptions: MyRentalsStack.navigationOptions},
  MyRigs: {screen: MyRigsScreen, navigationOptions: MyRigsStack.navigationOptions},
  //Account: {screen: MyAccountScreen, navigationOptions: MyAccountStack.navigationOptions},
  //Search: {screen: SearchScreen, navigationOptions: SearchScreenStack.navigationOptions },
  //Login: {screen: LoginScreen, navigationOptions: LoginScreenStack.navigationOptions },
}, {
  shifting: true,
  //activeColor: "#f34541",
  initialRouteName: 'MyRentals',
  activeTintColor: '#f0edf6',
  inactiveColor: '#2F3136',
  barStyle: { backgroundColor: themes[theme]['foregroundColor'] },
})
***/
