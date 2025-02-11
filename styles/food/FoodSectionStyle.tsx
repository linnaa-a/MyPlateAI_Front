import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    "main-container": {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "90%",
        justifyContent: "flex-start",
        paddingVertical: 10,
        height: 110,
        marginVertical: 5
    },

    "main-container-left" : {
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
    },

    "main-container-right": {
        borderTopLeftRadius: 80,
        borderBottomLeftRadius: 80,
        position: "relative",
        alignSelf: "flex-end",
        alignItems: "flex-end",
    },

    "information-container-left" : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 30,
        width: "50%"
    },

    "information-container-right" : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 5,
        marginRight: 30,
        width: "50%",
    },

    "image": {
        width: 50,
        height: 50
    },

    "text" : {
        color: colors.darkgreen,
        fontSize: 12,
        fontFamily: "Geologica"
    },

    "section-title": {
        display: "flex",
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: "center",
        height: 20
    }
})
