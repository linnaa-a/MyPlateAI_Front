import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import CalendarComponent from '../components/CalendarComponent';
import { useState } from 'react';

export default function HomeScreen() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <View>
            <CalendarComponent/>
            <View style={styles.container}>

            </View>
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