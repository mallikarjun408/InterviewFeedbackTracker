import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('screen').height;

export const addfeedbackStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 250,
        height: 60,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 12
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    },
    pickerStyle: {
        flex: 1,
        width: '100%'
    },
    model:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modelView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        marginTop:height/2.5,
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'gray',
        elevation:5,
        borderRadius:20,
        opacity:1,
        backgroundColor:'white'
    },
    pressableStyle:{
        justifyContent:'center',
        alignItems:'center',
        padding:15

    },

})