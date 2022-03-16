import { StyleSheet } from "react-native";

export const evalutionStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:50
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 5,
        marginVertical:5,
        borderBottomColor:'blue'
    },

    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:5
    },
    textInput: {
        marginTop: 5,
        height: 50,
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        color: 'blue',

    },
    columnFlex2: {
        flex: 2
    },
    column1:{
         textAlign: 'left', 
         fontSize: 15, 
         fontWeight: '400',
         color:'black',
         flex:9
    },
    column2:{ 
        flex: 4, 
        justifyContent: 'center', 
        textAlign: 'center', 
        color:'black'
    },
    column3:{ 
        height: 50, 
        width: 100, 
        borderWidth: 0, 
        color: 'blue', 
        fontWeight: 'bold' ,
        textAlign: 'center',
    },
    columntxtStyle:{
        color:'blue',
        fontWeight:'600',
        fontSize:16
    }

})