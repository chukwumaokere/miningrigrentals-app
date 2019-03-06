import { TouchableOpacity, View, Text }from 'react-native';
import React from 'react';

import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

const items = [
  { name: 'one'},
  { name: 'two'},
  { name: 'three'},
  { name: 'four'},
]

export default class MenuList extends React.Component {

  static navigationOptions = {
    title: 'Menu'
  }

  renderItem = (item, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={() => this.props.navigation.navigate('Item', { title: item.name })}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`I'm a StackNavigator!`}</Text>
        {items.map(this.renderItem)}
      </View>
      )
  }
}
