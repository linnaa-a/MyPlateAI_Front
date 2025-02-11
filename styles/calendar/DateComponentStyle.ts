import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    "calendar-block": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        alignSelf: "center",
    },
    "small-text": {
        fontSize: 11
    },
    "medium-text": {
        fontSize: 12
    },
    "today": {
        backgroundColor: colors.darkgreen
    },
    "today-text": {
        color: colors.white
    }
})