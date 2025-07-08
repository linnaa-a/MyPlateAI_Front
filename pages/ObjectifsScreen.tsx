import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import CalendarComponent from "../components/CalendarComponent";
import Colors from "../constants/Colors";
import NutritionOverview from "../components/NutritionOverview";
import MyObjectivesSection from "../components/MyObjectivesSection";
import {styles as globalstyle} from "../styles/global";


export default function ObjectifsScreen(props: any) {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [nutrition, setNutrition] = useState([
        {"title": "Kcal", "value": 2500, "unit": "", "backgroundColor": Colors.orange},
        {"title": "Protéines", "value": 15, "unit": "g", "backgroundColor": Colors.red},
        {"title": "Glucides", "value": 89, "unit": "g", "backgroundColor": Colors.blue},
        {"title": "Fibres", "value": 10, "unit": "g", "backgroundColor": Colors.lightgreen},
    ])

    return (
        <ScrollView style={styles.mainContainer}>

            <Text style={[globalstyle.text,{
                textTransform: "capitalize",
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 20,
                marginTop: 20
            }]}>Mes objectifs</Text>

            <CalendarComponent onDatePress={(date) => setSelectedDate(date)} selectedDate={selectedDate}/>

            <View>
                <NutritionOverview nutrition={nutrition}/>
                <MyObjectivesSection></MyObjectivesSection>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
});