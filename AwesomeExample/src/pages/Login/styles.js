import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  loginHeader: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: '300',
    marginBottom: 40,
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: screenWidth * 0.802,
  },
  icon: {
    height: '10%',
    width: '10%',
  },
});
