import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { styles } from '../assets/styles';
import { ThemeContext, themes } from '../assets/themes';
//import { Test } from './Test';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container, {backgroundColor: themes.dark.backgroundColor}} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

          </View>
        </ScrollView>
        <Text style={{color: themes[theme]['color']}}> My Home</Text>
        {/*}
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This app is in development mode</Text>

          {/*
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>

        </View> */}
      </View>
    );
  }
}
