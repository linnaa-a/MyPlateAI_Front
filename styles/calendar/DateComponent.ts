import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    "calendar-block": {
        display: "flex",
        width: "9%",
        height: 55,
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 5,
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