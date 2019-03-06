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
    paddingTop: 20,
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
  headerButton: {
        height: 30,
        width: 300,
        flex: 0,
        marginTop: 5,
        marginLeft: 20,
    },
    hamburgerMenu: {
    },
    greetingHeader: {
      fontSize: 24,
      color: themes[theme]['color'],
    }
});
