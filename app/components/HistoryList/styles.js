import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    item: {
        backgroundColor: "white",
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    lineBlue: {
        width: 10,
        backgroundColor: '#add8e6',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height:'100%'
    },
    lineGreen: {
        width: 10,
        backgroundColor: '#0FFF50',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height:'100%'
        
    },
    lineRed: {
        width: 10,
        backgroundColor: 'red',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height:'100%'
        
    },
    dataitemcontainer: {
        padding: 10,
        width: '80%'
    },
    textStyle80016: {
        fontWeight: "800",
        fontSize: 18
    },
    textStyle60014: {
        fontWeight: "600",
        fontSize: 16
    },
    textStyle40014: {
        fontWeight: "400",
        fontSize: 16
    },
    fileicon:{
        width:50,
        height:50,

    },
    header:{
        fontWeight:"bold",
        fontSize:18,
        paddingVertical:5,
        color:'blue'
    }

});