import {View, Text} from 'react-native';
import {styles as nutritionstyle} from '../styles/food/NutritionOverviewStyle';
import {styles as globalstyle} from '../styles/global';
import { useState } from 'react';
import { NutritionOverviewProps, NutritionType } from '../types/food/NutritionType';

const NutritionRound = ({title, value, unit, backgroundColor}: NutritionType) => {
    return (
        <View style={nutritionstyle["nutrition-round-container"]}>
            <View style={[nutritionstyle["nutrition-round"], {backgroundColor: backgroundColor} ]}>
                <Text style={[globalstyle.text, nutritionstyle["nutrition-value"]]}>{value}{unit}</Text>
            </View>
            <Text style={[globalstyle.text, nutritionstyle["nutrition-title"]]}>{title}</Text>
        </View>
    )
}

export default function NutritionOverview({nutrition}: NutritionOverviewProps) {

    const [nutritionState, setNutritionState] = useState(nutrition);


    return (
        <View style={nutritionstyle["nutrition-overview"]}>
            <Text style={globalstyle.text}>Mes apports nutritionnels du jour</Text>
            <View style={nutritionstyle["nutrition-container"]}>
                {nutritionState.map((nutri, index) => {
                    return <NutritionRound key={index} title={nutri.title} value={nutri.value} unit={nutri.unit} backgroundColor={nutri.backgroundColor}/>
                })}
            </View>
        </View>
    )
}