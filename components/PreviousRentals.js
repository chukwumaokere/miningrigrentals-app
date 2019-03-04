import React from 'react';
import { ScrollView, View, Text, Image, Button, } from 'react-native';

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

class PreviousRentalsList extends React.Component {
    render() {
      const { rigs } = this.props;
      if (rigs.length >= 1){
        return <View>{rigs.map( rig => <RigPost key={rig.key} rig={rig}/> )}</View>;
      }else{
        return <Text style={styles.rigDesc}> None available </Text>;
      }
    }
}

export default class PreviousRentalsL extends React.Component {
  i = 4;
  state = {
    rigs: [
      {
        name: 'CPU 8 CORE 16T',
        hashrate: '1.00K',
        avg: '1.08K',
        ppaid: '0.0000745',
        started: '2017-12-21 17:16:05',
        ended: '2017-12-21 23:16:05',
        img: 'https://picsum.photos/200?image=100',
        key: 1,
      },
      {
        name: '1900+H|s',
        hashrate: '1.90K',
        avg: '1.83K',
        ppaid: '0.00018683',
        started: '2017-12-21 17:02:25',
        ended: '2017-12-22 01:02:25',
        img: 'https://picsum.photos/200?image=400',
        key: 0,
      },
    ]
  };

  componentDidMount(){
    this.setState({
      rigs: [
        {
          name: '1600+H|s',
          hashrate: '1.60K',
          avg: '1.81K',
          ppaid: '0.00012533',
          started: '2017-12-27 13:33:49',
          ended: '2017-12-27 21:33:49',
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
            name: `Rig ${this.i}`,
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

  render(){
    const { rigs } = this.state;
    return (
      <ScrollView style={styles.container, {backgroundColor: themes[theme]['backgroundColor'] }}>
        <View style={styles.innerContainer, {padding: 20}}>
          <Text style={{color: themes[theme]['secondaryColor'], marginBottom: 10}}> Previous Rentals </Text>
          <PreviousRentalsList rigs={rigs} />
        </View>
      </ScrollView>
    )
  }
}
