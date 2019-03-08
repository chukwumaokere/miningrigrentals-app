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
    rigs: 0,
    shouldUpdate: false,
  }

  componentDidMount(){
    //this._componentFocused();
    this._sub = this.props.navigation.addListener('didFocus',
      this._componentFocused
    );
  }
  componentWillUnmount() {
    this._sub.remove();
  }
  _componentFocused = () => {
    this.getMyRigs();
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
    }).then( (response) => response.json() )
    .then( (responseJson) => {
      console.log(responseJson);
      if (responseJson.success==true){
        console.log(responseJson.data.length);
        this.setState({rigs: responseJson.data.length + this.state.rigs,});
      }
    });
  }

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
          <ScrollView style={styles.container, {backgroundColor: themes[theme]['backgroundColor'] }}>
            <Text style={{color: themes[theme]['secondaryColor'], paddingLeft: 20 }}> You have {this.state.rigs} rented rigs </Text>
            <Button onPress={this.getMyRigs} title="Refresh Rigs Count"></Button>
          </ScrollView>
        </View>
      </View>
    );
  }
}
