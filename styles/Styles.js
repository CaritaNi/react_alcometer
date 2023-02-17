import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#F7F9F9'
    },
    title:{
        fontSize: 22,
        color: '#0E6655',
        fontWeight: 1
    },
    label:{
        color: '#0E6655'
    },
    form:{
        padding:10
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    button:{
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
        textAlign:'center',
        backgroundColor: '#52BE80',
        color: 'white'
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45
      },
      radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
      },
      radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
      },
      radioButtonText: {
        fontSize: 16,
        marginLeft: 16
      }
});

export default {Styles};