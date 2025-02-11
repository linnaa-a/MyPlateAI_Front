import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import CalendarComponent from '../components/CalendarComponent';
import { useState } from 'react';
import NutritionOverview from '../components/NutritionOverview';
import FoodSection from '../components/FoodSection';

export default function HomeScreen() {

    const [nutrition, setNutrition] = useState([
        {"title": "Kcal", "value": 2000, "unit": "", "backgroundColor": Colors.orange},
        {"title": "Protéines", "value": 100, "unit": "g", "backgroundColor": Colors.red},
        {"title": "Glucides", "value": 300, "unit": "g", "backgroundColor": Colors.blue},
        {"title": "Fibres", "value": 50, "unit": "g", "backgroundColor": Colors.lightgreen},
    ])

    return (
        <ScrollView style={styles.mainContainer}>
            <CalendarComponent/>
            <View>
                <NutritionOverview nutrition={nutrition}/>
            </View>
            <View>
                <FoodSection title='Petit-déjeuner' image=""></FoodSection>
                <FoodSection title='Déjeuner' image="" left={true}></FoodSection>
                <FoodSection title='Dîner' image=""></FoodSection>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});