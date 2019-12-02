import {StyleSheet, Dimensions} from 'react-native';
import color from '../../styles/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

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
  button: {
    width: wp('12%'),
    marginHorizontal: 15,
  },
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
  errorMsg: {
    marginTop: 40,
    color: color.error,
  },
});
