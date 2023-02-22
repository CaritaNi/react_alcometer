import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#F0FFD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#181515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText:{
    color: "#fff"
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',

    marginVertical: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 100,
  },
  genderButton: {
    backgroundColor: '#239F9F',
    borderRadius: 4,
    padding: 10,
    margin: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    padding: 10,
    margin: 10,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#4CAF50',
    fontSize: 18,
    fontWeight: 'bold',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 10,
  },
  radioButtonIconDark: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 10,
  },
  radioButtonIconChecked: {
    backgroundColor: '#4CAF50',
    borderColor: '#3f51b5',
  },
  radioButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#black',
  },
});

export default styles;