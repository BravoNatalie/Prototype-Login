import {StyleSheet} from 'react-native';
import color from '../../styles/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  imageContainer: {
    flex: 0.462,
    resizeMode: 'contain',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginHeader: {
    width: wp('25%'),
  },
  logo: {
    flex: 1,
    width: wp('80%'),
  },
  icon: {
    flex: 1,
    width: wp('14%'),
    bottom: hp('-6.5%'),
  },
  textContainer: {
    flex: 0.538,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: hp('8%'),
    marginHorizontal: wp('15%'),
  },
  questionText: {
    fontFamily: 'Lato-Regular',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: color.primary,
    textAlign: 'center',
  },
});
