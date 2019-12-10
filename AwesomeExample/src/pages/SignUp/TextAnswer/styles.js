import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  inputAnswer: {
    marginTop: hp('10%'),
    fontFamily: 'Lato-Regular',
    fontSize: hp('2.2%'),
    width: wp('80%'),
    color: color.primary,
    borderRadius: 30,
    backgroundColor: 'rgba(5, 207, 224,0.1)',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  errorMsg: {
    marginTop: 40,
    color: color.error,
  },
  button: {
    width: wp('12%'),
    marginHorizontal: 15,
  },
});
