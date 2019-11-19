import {StyleSheet, Dimensions} from 'react-native';
import color from '../../styles/colors';

const screenWidth = Math.round(Dimensions.get('window').width);
//const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 0.455,
    resizeMode: 'contain',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginHeader: {
    width: screenWidth * 0.25,
  },
  logo: {
    flex: 1,
    width: screenWidth * 0.8,
  },
  icon: {
    flex: 1,
    width: screenWidth * 0.12,
    bottom: '-15%',
  },
  textContainer: {
    flex: 0.545,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '15%',
    marginHorizontal: '15%',
  },
  questionText: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primary,
  },
  inputAnswer: {
    marginTop: '25%',
    fontFamily: 'Lato',
    fontSize: 15,
    color: color.primary,
    borderRadius: 25,
    paddingHorizontal: '35%',
    paddingVertical: 30,
    backgroundColor: 'rgba(5, 207, 224,0.1)',
  },
  button: {
    width: screenWidth * 0.12,
    marginHorizontal: 15,
  },
  multipleChoiseButtonImage: {
    width: screenWidth * 0.8,
  },
  multipleChoiseContainer: {
    width: '100%',
    marginTop: '7%',
  },
  multipleChoiseView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.9,
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
    color: '#FFFFFF',
  },
  multipleChoiseTextOption: {
    fontSize: 28,
  },
  errorMsg: {
    marginTop: 40,
    color: '#FF0000',
  },
});
