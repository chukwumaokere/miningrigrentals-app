import React from 'react';
import { Text } from 'react-native';

export class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      darkmode: true,
    }
  }
  static navigationOptions = {
    title: 'Test',
  };
  /*
  state = {
    darkmode: true,
  }*/
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
