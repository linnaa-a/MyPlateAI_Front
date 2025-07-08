import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import CalendarComponent from '../components/CalendarComponent';
import { useState } from 'react';
import NutritionOverview from '../components/NutritionOverview';
import FoodSection from '../components/FoodSection';
import LunchIllustration from "../assets/images/home/lunch-illustration.svg";
import BreakfastIllustration from "../assets/images/home/breakfast-illustration.svg";
import DinnerIllustration from "../assets/images/home/dinner-illustration.svg";
import TabNavigator from '../components/BottomBar';

export default function HomeScreen() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    

    const [nutrition, setNutrition] = useState([
        {"title": "Kcal", "value": 2000, "unit": "", "backgroundColor": Colors.orange},
        {"title": "Protéines", "value": 100, "unit": "g", "backgroundColor": Colors.red},
        {"title": "Glucides", "value": 300, "unit": "g", "backgroundColor": Colors.blue},
        {"title": "Fibres", "value": 50, "unit": "g", "backgroundColor": Colors.lightgreen},
    ])

    return (
        <View style={styles.mainContainer}>
            <CalendarComponent onDatePress={(date) => setSelectedDate(date)} selectedDate={selectedDate}/>
            <View>
                <NutritionOverview nutrition={nutrition}/>
            </View>
            <View>
                <FoodSection title='Petit-déjeuner' illustration={BreakfastIllustration}></FoodSection>
                <FoodSection title='Déjeuner' illustration={LunchIllustration} left={true}></FoodSection>
                <FoodSection title='Dîner' illustration={DinnerIllustration}></FoodSection>
            </View>
            <TabNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});