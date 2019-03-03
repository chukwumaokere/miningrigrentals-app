import React from 'react';
import { ScrollView, View, Text, Image, Button, } from 'react-native';

import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

const RigPost = ({ rig }) => (
  <View style={styles.rigCard}>
    <View style={styles.rigInnerCard}>
      <Text style={styles.rigTitle}>{rig.title}</Text>
      <Text style={styles.rigDesc}>{rig.desc}</Text>
      <Image style={styles.rigImg} source={{uri: rig.img}} />
    </View>
  </View>
);

class CurrentRentalsList extends React.Component {
    render() {
      const { rigs } = this.props;

      return <View>{rigs.map( rig => <RigPost key={rig.key} rig={rig}/> )}</View>;
    }
}

export default class CurrentRentalsL extends React.Component {
  i = 4;
  state = {
    rigs: [
      {
        title: 'Rig 2',
        desc: 'This is a SHA256 Rig',
        img: 'https://picsum.photos/200?image=100',
        key: 1,
      },
      {
        title: 'Rig 1',
        desc: 'This is a nicer Rig',
        img: 'https://picsum.photos/200?image=400',
        key: 0,
      },
    ]
  };

  componentDidMount(){
    this.setState({
      rigs: [
        {
          title: 'Rig 3',
          desc: 'This is the third rig',
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
            title: `Rig ${this.i}`,
            desc: `This is rig #${this.i}`,
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
          <Text style={{color: themes[theme]['secondaryColor'], marginBottom: 10}}> Current Rentals </Text>
          <CurrentRentalsList rigs={rigs} />
          <Button onPress={this.getMoreRigs} title="Load more..."></Button>
        </View>
      </ScrollView>
    )
  }
}
