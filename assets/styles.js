import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ThemeContext, themes } from '../assets/themes';
import { theme } from '../assets/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: themes[theme]['backgroundColor']
  },
  innerContainer: {
    padding: 20,
  },
  rigCard: {
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: themes[theme]['borderColor'],
    backgroundColor: themes[theme]['foregroundColor'],
    marginTop: 10,
  },
  rigInnerCard: {
    padding: 20,
  },
  rigName: {
    color: themes[theme]['color'],
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "900",
  },
  rigDesc: {
    color: themes[theme]['color'],
    fontSize: 12,
    marginBottom: 10,
  },
  rigDescBold: {
    color: themes[theme]['color'],
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  rigImg: {
    height: 200,
    padding: 10,
    borderRadius: 5,
  },
});
