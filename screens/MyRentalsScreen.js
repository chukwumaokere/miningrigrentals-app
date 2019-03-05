import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBarNav from 'top-bar-nav';
import CurrentRentalsL  from '../components/CurrentRentals';
import PreviousRentalsL  from '../components/PreviousRentals';
import CompletedRentalsL from '../components/CompletedRentals';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';
import { styles } from '../assets/styles';

//var theme = 'dark';

const CurrentRentals = (props) => (
  <CurrentRentalsL />
);

const RecentlyCompleted = (props) => (
  <CompletedRentalsL />
);

const PreviousRentals = (props) => (
  <PreviousRentalsL />
);

const ROUTES = {
  CurrentRentals,
  RecentlyCompleted,
  PreviousRentals
};

const ROUTESTACK = [
  {
    label: 'Current',
    title: 'CurrentRentals'
  },
  {
    label: 'Completed',
    title: 'RecentlyCompleted'
  },
  {
    label: 'Previous',
    title: 'PreviousRentals'
  },
];


export default class MyRentalsScreen extends React.Component {
  static navigationOptions = {
    title: 'My Rentals',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TopBarNav
            //custom: added logo param
            //icon={logo}
            // routeStack and renderScene are required props
            routeStack={ROUTESTACK}
            renderScene={(route, i) => {
              // This is a lot like the now deprecated Navigator component
              let Component = ROUTES[route.title];
              return (<Component info={this.props.navigation.state.params} />);
            }}
            // Below are optional props
            headerStyle={{paddingTop: 20, paddingBottom: 0, marginTop: 5, backgroundColor: themes[theme]['foregroundColor'], borderBottomColor: themes[theme]['foregroundColor'], borderBottomWidth:0}}
            labelStyle={{color: themes[theme]['color'], paddingBottom: 10, fontSize: 14}}
            underlineStyle={{height: 1.5, marginBottom: 0, paddingBottom: 0}}
            /*
            headerStyle={[styles.headerStyle, { paddingTop: 30 }]} // probably want to add paddingTop: 20 if using TopBarNav for the  entire height of screen on iOS
            labelStyle={styles.labelStyle}
            underlineStyle={styles.underlineStyle}
            imageStyle={styles.imageStyle}
            */
            sidePadding={20} // Can't set sidePadding in headerStyle because it's needed to calculate the width of the tabs
            bottomPadding={0}
            inactiveOpacity={0.5}
            fadeLabels={false} />
        </View>
      </View>
    );
  }
}
{/* Deprecated
//<ScrollView style={styles.container}>
//  <View style={styles.innerContainer}>
//    <Text style={{color: themes[theme]['secondaryColor']}}> Current Rentals </Text>
//  </View>
//</ScrollView>
*/}
