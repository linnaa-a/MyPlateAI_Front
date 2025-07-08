import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native"
import { SvgUri } from "react-native-svg";
import { styles as foodstyle } from "../styles/food/FoodSectionStyle"
import AddIcon from "../assets/icons/globals/add-icon.svg";
import { FoodSectionProps, Items } from "../types/food/FoodSectionType";
import MealModal from "./MealModal";

export default function FoodSection({ title, illustration: Illustration, left }: FoodSectionProps) {
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
    const [calories, setCalories] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePress = () => {
        setIsModalVisible(true);
    };

    return (
        <View>
            <Pressable onPress={handlePress}>
                <View style={[foodstyle["main-container"], foodstyle[`main-container-${left ? 'right' : 'left'}`]]}>
                    <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", position: "relative", width: "100%"}, (left) ? {justifyContent: "flex-end"  } : {justifyContent: "flex-start"} ]}>
                        {/* Illustration for left-aligned layout */}
                        {left && (
                            <View style={{ position: "absolute", left: 20 }}>
                                <Illustration/>
                            </View>
                        )}

                        <View style={{}}>
                            {/* Title and Calories Section */}
                            <View style={[foodstyle["section-title"], (left) ? {justifyContent: "flex-end"} : {}]}>
                                <Text style={[foodstyle.text, { fontWeight: "600" }]}>{title}</Text>
                                <View style={{marginLeft: 10}}>
                                    <Text style={[foodstyle.text, { fontWeight: "200", fontSize: 10 }]}>{calories}Kcal</Text>
                                </View>
                            </View>

                            {/* Items List and Add Button */}
                            <View style={foodstyle[`information-container-${left ? 'right' : 'left'}`]}>
                                {items.length > 0 && (
                                <Text style={[foodstyle.text, { fontSize: 11, textAlign: left ? "right" : "left" }]}>
                                    {items.map((item, index) => (
                                    <Text key={index}>
                                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                                        <Text style={{ fontWeight: "100" }}> {item.quantity}{item.unit}</Text>
                                        {index < items.length - 1 ? ', ' : ''}
                                    </Text>
                                    ))}
                                </Text>
                                )}
                                <Pressable style={foodstyle["add-button"]}>
                                    <AddIcon width={10} height={10} />
                                    <Text style={[foodstyle.text, { fontWeight: "600", color: "white", marginLeft: 10 }]}>
                                        Ajouter
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        {/* Illustration for right-aligned layout */}
                        {!left && (
                            <View style={{ position: "absolute", right: 20 }}>
                                <Illustration/>
                            </View>
                        )}
                    </View>
                </View>
            </Pressable>

            <MealModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                title={title}
            />
        </View>
    )
}