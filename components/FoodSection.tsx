import { useState } from "react";
import { View, Text, Image } from "react-native"
import { styles as foodstyle } from "../styles/food/FoodSectionStyle"
import { FoodSectionProps, Items } from "../types/food/FoodSectionType";

export default function FoodSection({ title, image, left }: FoodSectionProps) {
    const [items, setItems] = useState<Items[]>([
        {
            "name": "Pomme",
            "quantity" : 80,
            unit: "g"
        },
        {
            "name": "Pomme",
            "quantity" : 80,
            unit: "g"
        },
    ]);
    const [calories, setCalories] = useState(0)
    

    return (
        <View>
            <View style={[foodstyle["main-container"], (left ? foodstyle["main-container-right"] : foodstyle["main-container-left"])]}>
               <View style={foodstyle["section-title"]}>
                    <View style={{ marginRight: 10 }}>
                        <Text style={[foodstyle.text, { fontWeight: "600" }]}>{title}</Text>
                    </View>
                    <View>
                        <Text style={[foodstyle.text, {fontWeight: 200, fontSize: 10}]}>{calories}Kcal</Text>
                    </View>
                </View>

                <View style={(left ? foodstyle["information-container-right"] : foodstyle["information-container-left"])}>
                    {items.length > 0 && (
                        <Text style={[foodstyle.text, {fontSize: 11}, { textAlign: left ? "right" : "left" }]}>
                            {items.map((item, index) => (
                                <Text key={index}><Text style={{fontWeight: "bold"}}>{item.name}</Text>  <Text style={{fontWeight: 100}}>{item.quantity}{item.unit}</Text>, </Text>
                            ))}
                        </Text>
                    )}
                </View>
                <Image source={{ uri: image }} style={foodstyle.image} />
            </View>
        </View>
    )
}