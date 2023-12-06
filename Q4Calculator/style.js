import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 48,
        backgroundColor: "#ededed",
    },
    display: {
        fontSize: 32,
    },
    buttons: {
        borderWidth: 1,
        borderColor: "black",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent:"center",
        margin: 5,
        backgroundColor:"#FFF",
    },
    operatorButtons: {
        borderWidth: 1,
        borderColor: "black",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent:"center",
        margin: 5,
        backgroundColor: "#e0e0e0",
    },
    row: {
        flexDirection: "row",
        flexWrap:"wrap",
    },
    buttonText: {
        textAlign:"center",
        fontSize: 24,
    },
    operatorText: {
        textAlign:"center",
        fontSize: 24,
        color: "orange",
    },
    zeroButton: {
        borderWidth: 1,
        borderColor: "black",
        width: 110,
        height: 50,
        borderRadius: 25,
        justifyContent:"center",
        margin: 5,
        backgroundColor:"#FFF",
    },
    clearButton: {
        borderWidth: 1,
        borderColor: "black",
        width: 230,
        height: 50,
        borderRadius: 25,
        justifyContent:"center",
        margin: 5,
        backgroundColor: "#e0e0e0",
    },
    equalButton: {
        borderWidth: 1,
        borderColor: "black",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent:"center",
        margin: 5,
        backgroundColor: "orange",
    },
    equalText: {
        textAlign:"center",
        fontSize: 24,
        color: "#FFF",
    },
    elavation: {
        elevation: 20,
        shadowColor: 'black',
    },
});