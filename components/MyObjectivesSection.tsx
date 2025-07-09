import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles as nutritionstyle} from '../styles/food/NutritionOverviewStyle';
import {styles, theme} from '../styles/global';
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import * as Progress from 'react-native-progress'

export default function MyObjectivesSection() {

    return (
        <View style={nutritionstyle["nutrition-goals-container"]}>
            <View style={styles['flex-vertical']}>
                <View style={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
                    <View>
                        <AnimatedCircularProgress
                            size={100}
                            width={8}
                            fill={(2000 / 2500) * 100}
                            tintColor={theme.orange}
                            backgroundColor={theme.paleOrange}
                            rotation={0}
                        >
                            {
                                () => (
                                    <Text style={styles.text}>
                                    2000Kcal
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                    <View style={styles.nutrientsContainer}>
                        <View style={{paddingBottom: 5}}>
                            <Text style={styles.text}> Protéines : 15g</Text>
                            <Progress.Bar progress={(15 / 100)} width={120} color={theme.palePink} unfilledColor={theme.paleGrey} borderWidth={0}/>
                        </View>
                        <View style={{paddingBottom: 5}}>
                            <Text style={styles.text}> Glucides : 89g</Text>
                            <Progress.Bar progress={89 / 300} width={120} color={theme.paleBlue} unfilledColor={theme.paleGrey} borderWidth={0}/>
                        </View>
                        <View>
                            <Text style={styles.text}> Fibres : 10g</Text>
                            <Progress.Bar progress={10 / 50} width={120} color={theme.paleGreen} unfilledColor={theme.paleGrey} borderWidth={0}/>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 25}}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "Geologica",
                        fontWeight: 500
                    }}>
                        Mes objectifs actuels
                    </Text>
                </View>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        <View style={{marginTop: 25, display: "flex", flexDirection: "row"}}>
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>Kcal/jour :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: theme.paleGrey,
                                    height: 20,
                                    width: 40,
                                    borderRadius: 10,
                                    marginLeft: 5,
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: "Geologica"
                                }}
                                defaultValue="2000"
                            />
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>kcal</Text>
                        </View>
                        <View style={{marginTop: 25, display: "flex", flexDirection: "row"}}>
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>Glucides/jour :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: theme.paleGrey,
                                    height: 20,
                                    width: 40,
                                    borderRadius: 10,
                                    marginLeft: 5,
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: "Geologica"
                                }}
                                defaultValue="300"
                            />
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>g</Text>
                        </View>
                    </View>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        <View style={{marginTop: 25, display: "flex", flexDirection: "row"}}>
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>Protéines/jour :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: theme.paleGrey,
                                    height: 20,
                                    width: 40,
                                    borderRadius: 10,
                                    marginLeft: 5,
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: "Geologica"
                                }}
                                defaultValue="100"
                            />
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>g</Text>
                        </View>
                        <View style={{marginTop: 25, display: "flex", flexDirection: "row"}}>
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>Fibres/jour :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: theme.paleGrey,
                                    height: 20,
                                    width: 40,
                                    borderRadius: 10,
                                    marginLeft: 5,
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: "Geologica"
                                }}
                                defaultValue="50"
                            />
                            <Text style={{fontSize: 12, fontFamily: "Geologica"}}>g</Text>
                        </View>
                    </View>
                </View>
                <View style={{margin: "auto", marginTop: 40, marginBottom: 15}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: theme.greenBlue,
                            width: 100,
                            height: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 20
                        }}
                        onPress={() => {}}
                        >
                        <Text style={{fontFamily: "Geologica", color: theme.white}}>Enregistrer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}