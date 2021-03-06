import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

//var theme = 'dark';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView style={styles.container, {backgroundColor: themes.dark.backgroundColor}}>
        <Text style={{color: themes[theme]['color']}}> Settings Page</Text>

      </ScrollView>
    );
  }
}
