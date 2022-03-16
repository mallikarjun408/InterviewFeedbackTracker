import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10
    },
    viewContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        height: 3,
        backgroundColor: 'gray',
        flex: 1
    },
    circle_fill: {
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    lineblue: {
        height: 3,
        backgroundColor: 'green',
        flex: 1
    },
    txtStyle: {
        color: 'white',
        fontWeight: '600',
        fontSize:16
    },
    txtStyleBlack: {
        color: 'black',
        fontWeight: '600',
        fontSize:16
    }
})