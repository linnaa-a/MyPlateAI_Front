import { StyleSheet } from "react-native";

export const theme = {
    turquoise: "#31C48D",
    darkTurquoise: "#15A26D",
    green: "#008000",
    cream: "#FEFCF5",
    black: "#1E1E1E",
    lightGrey: "#D9D9D9",
    grey: "#AFAFAF",
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
    },
    "centered": {
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: 10
    },
    "corner": {
        width: 30,
        height: 30,
        borderColor: 'turquoise',
        position: 'absolute',
    },
    "topLeft": {
        top: 0,
        left: 0,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderTopLeftRadius: 15,
    },
    "topRight": {
        top: 0,
        right: 0,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderTopRightRadius: 15,
    },
    "bottomLeft": {
        bottom: 0,
        left: 0,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderBottomLeftRadius: 15,
    },
    "bottomRight": {
        bottom: 0,
        right: 0,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderBottomRightRadius: 15,
    },
    "cameraButtonWrapper": {
        position: 'relative',
        height: 40,
        width: 40,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden',
        borderRadius: 100,
        left: '50%',
        transform: [{ translateX: '-50%' }],
    },
    "buttonContainer": {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '15%',
        position: 'absolute',
        bottom: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    "cameraButton": {
        position: "relative",
        backgroundColor: 'white',
        overflow: 'hidden',
        width: 30,
        height: 30,
        marginLeft: 'auto',
        borderRadius: 100,
        marginRight: 'auto',
        zIndex: 100,
    },
    "container": {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: 'hidden',
    },
    "iconButton": {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 20,
        left: 20,
    },
    "icon": {
        width: 20,
        height: 20,
    },
    "validateButton": {
        position: 'absolute',
        bottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        left: '50%',
        transform: [{ translateX: -50 }],
        backgroundColor: 'white',
        borderRadius: 50,
        zIndex: 10,
    },
    "imageContainer": {
        position: 'absolute',
        left: '15%',
        marginRight: 10,
    },
    "image": {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
    },
    "overlappingImage": {
        position: 'absolute',
        left: 10,
        top: -10,
    },
    "androidGalleryButtonContainer": {
        position: 'absolute',
        left: '22%',
        top: '50%',
        transform: [{ translateY: -20 }],
    },
    "androidGalleryButton": {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
    },
    "galleryButtonIcon": {
        width: 20,
        height: 20,
    },
    "loaderContainer": {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    "loader": {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    "dot": {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 4,
    },
    "dot1": {
        backgroundColor: theme.turquoise,
    },
    "dot2": {
        backgroundColor: theme.green,
    },
    "dot3": {
        backgroundColor: theme.darkTurquoise,
    },
})