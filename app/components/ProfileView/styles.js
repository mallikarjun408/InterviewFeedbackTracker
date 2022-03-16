import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems:'center',
        paddingTop:30,
        flexDirection:'column'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 1000,
    },
    edtimg:{
        width:50,
        height:50,
    },
    subcontainer:{
        flex:1,
        backgroundColor:'white',
        width:'100%',
        marginTop:20,
        padding:20,
        flexDirection:'column'
    },
    columnstyle:{
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:0.5
    },
    flex1:{
        flex:1
    },
    flex2:{
        flex:2
    },
    textstylekey:{
        color:'black',
        fontSize:15,
        fontWeight:"500"
    },
    textstyleval:{
        color:'blue',
        fontSize:17,
        fontWeight:"500"
    },
    padding10:{
        paddingHorizontal:10
    }

})