import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    "nutrition-overview": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginVertical: 20,
        backgroundColor: colors.white,
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    "nutrition-container": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10,
        alignItems: "center",
    },
    "nutrition-round-container": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    "nutrition-round": {
        borderRadius: 50,
        width: 45,
        height: 45,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    "nutrition-title": {
        fontSize: 11,
        fontFamily: "Geologica",
        color: "black",
        textAlign: "center",
        marginTop: 5,
        fontWeight: "300",
    },
    "nutrition-value": {
        fontSize: 11,
        fontFamily: "Geologica",
        color: "black",
        textAlign: "center",
    },
})