import {StyleSheet} from 'react-native';
import color from '../../../styles/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  multipleChoiseButtonImage: {
    width: wp('80%'),
  },
  multipleChoiseContainer: {
    width: wp('100%'),
    marginTop: wp('7%'),
  },
  multipleChoiseView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
  },
  multipleChoiseButtonA: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -37,
    marginLeft: '-37%',
    marginRight: '-39%',
  },
  multipleChoiseButtonB: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -37,
  },
  multipleChoiseButtonText: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  multipleChoiseResponseText: {
    fontSize: 18,
    textAlign: 'center',
    color: color.white,
  },
  multipleChoiseTextOption: {
    fontSize: 28,
  },
});
