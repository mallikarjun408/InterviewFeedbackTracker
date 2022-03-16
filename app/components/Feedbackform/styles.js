import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    containerBox: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    headerView: {
        backgroundColor: 'rgb(167, 199, 231)',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20

    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        flex: 1
    },
    viewColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    txtStyle: {
        color: 'black',
        fontWeight: '500'
    },
    rectangleBox: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5
    },
    reasonTextInput: {
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        padding:5,
        color: 'blue',

    }
})