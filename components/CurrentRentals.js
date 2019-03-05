import React from 'react';
import { ScrollView, View, Text, Image, Button, RefreshControl, } from 'react-native';

import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

//<Image style={styles.rigImg} source={{uri: rig.img}} />

const RigPost = ({ rig }) => (
  <View style={styles.rigCard}>
    <View style={styles.rigInnerCard}>
      <Text style={styles.rigName}>{rig.name}</Text>
      <Text style={styles.rigDesc}><Text style={styles.rigDescBold}>Hashrate: </Text>{rig.hashrate}</Text>
      <Text style={styles.rigDesc}><Text style={styles.rigDescBold}>Average: </Text>{rig.avg}</Text>
      <Text style={styles.rigDesc}><Text style={styles.rigDescBold}>Price Paid: </Text>{rig.ppaid}</Text>
      <Text style={styles.rigDesc}><Text style={styles.rigDescBold}>Started: </Text>{rig.started}</Text>
      <Text style={styles.rigDesc}><Text style={styles.rigDescBold}>Ended: </Text>{rig.ended}</Text>
    </View>
  </View>
);

class CurrentRentalsList extends React.Component {
    render() {
      const { rigs } = this.props;
      if (rigs.length >= 1){
        return <View>{rigs.map( rig => <RigPost key={rig.key} rig={rig}/> )}</View>;
      }else{
        return <Text style={styles.rigDesc}> None available </Text>;
      }
    }
}

export default class CurrentRentalsL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      rigs: [],
    };
  }
  i = 4;
  /* state = {
    rigs: []
  };
  */


  componentDidMount(){
    this.setState({
      rigs: [
        {
          name: '1700+H|s',
          hashrate: '1.73K',
          avg: '1.90K',
          ppaid: '0.00022544',
          started: '2019-03-03 13:45:49',
          ended: 'N/A',
          img: 'https://picsum.photos/200?image=200',
          key: 2,
        },
        ...this.state.rigs,
      ]
    });
  };

  getMoreRigs = () => {
    //Fetch more here
    this.setState(
      {
        rigs: [
          {
            name: `1${this.i}00+H|s`,
            hashrate: `${this.i}K`,
            avg: `1.8${this.i}K`,
            ppaid: `0.000${this.i}2452`,
            started: `Today`,
            ended: `N/A`,
            img: `https://picsum.photos/200?image=${400 + this.i}`,
            key: this.i,
          },
          ...this.state.rigs
        ],
      },
      () => (this.i = this.i + 1),
    )
  };
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.getMoreRigs();
    this.setState({refreshing: false});
  }
  /** True on refresh
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  **/
  render(){
    const { rigs } = this.state;
    return (
      <View style={styles.container}>
      <Text style={{color: themes[theme]['secondaryColor'], margin: 20, paddingBottom: 0}}> Current Rentals </Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
        }
       style={ {backgroundColor: themes[theme]['backgroundColor'] }}>
        <View style={styles.innerContainer, {padding: 20}}>
          {/*<Text style={{color: themes[theme]['secondaryColor'], marginBottom: 10}}> Current Rentals </Text> */}
          <Button onPress={this.getMoreRigs} title="Pull up to refresh..."></Button>
          <CurrentRentalsList rigs={rigs} />
        </View>
      </ScrollView>
      </View>
    )
  }
}
