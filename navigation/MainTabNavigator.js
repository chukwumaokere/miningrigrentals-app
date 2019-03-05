import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyRentalsScreen from '../screens/MyRentalsScreen';
import MyRigsScreen from '../screens/MyRigsScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';

//var theme = theme;

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={ Platform.OS === 'ios' ? `ios-home`: 'md-home' } />),
};

const MyRentalsStack = createStackNavigator({
  MyRentals: MyRentalsScreen,
});

MyRentalsStack.navigationOptions = {
  tabBarLabel: 'My Rentals',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-hammer' : 'md-hammer'} />),
};

const MyRigsStack = createStackNavigator({
  MyRigs: MyRigsScreen,
});

MyRigsStack.navigationOptions = {
  tabBarLabel: 'My Rigs',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} />),
};

const MyAccountStack = createStackNavigator({
  MyAccount: MyAccountScreen,
});

MyAccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />),
};

const SearchScreenStack = createStackNavigator({
  Search: SearchScreen,
});

SearchScreenStack.navigationOptions = {
  tabBarLabel: 'Search Rigs',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />),
};

const LoginScreenStack = createStackNavigator({
  Login: LoginScreen,
})

LoginScreenStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />),
};

/*
export default createBottomTabNavigator({
  HomeStack,
  MyRentalsStack,
  MyRigsStack,
  MyAccountStack
}); */

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
