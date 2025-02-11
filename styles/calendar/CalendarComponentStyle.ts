import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    "text-block" : {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row", 
        marginHorizontal: "10%",
        marginVertical: 20,
    },

    "calendar-block": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "90%",
        alignSelf: "center"
    }
})