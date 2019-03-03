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
  rigTitle: {
    color: themes[theme]['color'],
    fontSize: 16,
    marginBottom: 3,
  },
  rigDesc: {
    color: themes[theme]['color'],
    fontSize: 12,
    marginBottom: 10,
  },
  rigImg: {
    height: 200,
    padding: 10,
  },
});
