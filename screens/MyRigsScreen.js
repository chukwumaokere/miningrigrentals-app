import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

//var theme = 'dark';

export default class MyRigsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Rigs',
  };

  render() {
    return (
      <ScrollView style={styles.container, {backgroundColor: themes[theme]['backgroundColor'] }}>
        <Text style={{color: themes[theme]['color']}}> My Rigs</Text>

      </ScrollView>
    );
  }
}
