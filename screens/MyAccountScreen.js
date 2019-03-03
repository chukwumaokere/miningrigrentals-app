import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

//var theme = 'dark';

export default class MyAccountScreen extends React.Component {
  static navigationOptions = {
    title: 'My Account',
  };

  render() {
    return (
      <ScrollView style={styles.container, {backgroundColor: themes.dark.backgroundColor}}>


      </ScrollView>
    );
  }
}
