import { StyleSheet } from "react-native";

export const theme = {
    paleOrange: '#EDC193',
    orange: '#F49837',
    paleGreen: '#DAEAA1',
    paleGrey: '#F2F2F2',
    paleBlue: "#BBC9E7",
    palePink: "#E7909A",
    white: "#FFFFFF",
    greenBlue: "#088488"
}

export const styles = StyleSheet.create({
    "flex-horizontal": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    "flex-vertical": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    "text": {
        fontFamily: "Geologica",
    },
    "statsContainer": {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    "title": {
        fontSize: 24,
        fontFamily: 'Cairo-Bold',
        paddingBottom: 20,
        textAlign: 'center',
    },
    "objectivesFirstRow": {
        display: "flex",
        flexDirection: "row",
        width: 300,
        alignItems: "center",
        justifyContent: "space-around"
    },
    "nutrientsContainer": {
        display: "flex",
        flexDirection: "column"
    },
    "statsTextContainer": {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    "statsLabel": {
        lineHeight: 20
    }
})