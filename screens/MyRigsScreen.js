import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text, Button } from 'react-native';
import { Icon } from 'expo';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';
import { mrr } from '../constants/APIconfig';
//var theme = 'dark';

export default class MyRigsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Rigs',
  };
  state = {
    rigs: "",
  }
  getMyRigs = () => {
    fetch('https://chukwumaokere.com/mrr/webservice.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: mrr.key,
        secret: mrr.secret,
        type: 'GET',
        endpoint: '/rig/mine'
      })
    }).then( (response) => response.json() ).then( (responseJson) => { console.log(responseJson); })
  }

  popDrawer = () => {
    this.props.navigation.openDrawer();
  }

  whoami = () => {
    fetch('https://chukwumaokere.com/mrr/webservice.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: mrr.key,
        secret: mrr.secret,
        endpoint: '/whoami'
      })
    }).then( (response) => response.json() ).then( (responseJson) => { console.log(responseJson); })
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
            <Button onPress={this.getMyRigs} title="Get Rigs"></Button>
          </ScrollView>
        </View>
      </View>
    );
  }
}
