import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import CalendarComponent from '../components/CalendarComponent';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <CalendarComponent />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});