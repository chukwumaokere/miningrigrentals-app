import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import { Icon } from 'expo';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

//var theme = 'dark';

export default class MyRigsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Rigs',
  };
  popDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <View stlye={{flex: 1}}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={this.popDrawer}>
            <View style={{}}>
              <Text style={{}}>
                <Icon.Ionicons style={styles.hamburgerMenu} name="ios-menu" size={24} color={themes[theme]['color']} />
                <Text style={styles.greetingHeader}>    MiningRigRentals </Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{color: themes[theme]['secondaryColor'], padding: 20, marginBottom: 20, backgroundColor: themes[theme]['foregroundColor']}}> My Rigs </Text>
          {/* <Text style={{color: themes[theme]['color']}}> My Rigs</Text> */}
          <ScrollView style={styles.container, {backgroundColor: themes[theme]['backgroundColor'] }}>
            <Text style={{color: themes[theme]['secondaryColor'], paddingLeft: 20 }}> You have 0 rented rigs </Text>

          </ScrollView>
        </View>
      </View>
    );
  }
}
