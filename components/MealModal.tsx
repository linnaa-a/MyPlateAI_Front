import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
  Text
} from 'react-native';
import { BlurView } from 'expo-blur';
import Colors from '../constants/Colors';
import ArrowDownIcon from '../assets/icons/globals/arrow-down-icon.svg';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

interface CircularProgressProps {
  percentage: number;
  value: string;
  label: string;
  color: string;
}

const CircularProgress = ({ percentage, value, label, color }: CircularProgressProps) => {
  const size = 40;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.circleContainer}>
      <Svg width={size} height={size}>
        {/* Cercle de base (gris clair) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          opacity={0.2}
        />
        {/* Cercle de progression */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* Valeur au centre */}
        <SvgText
          x={size / 2}
          y={size / 2 + 4}
          fontSize="10"
          fill="black"
          textAnchor="middle"
          fontFamily="Geologica"
        >
          {value}
        </SvgText>
      </Svg>
      <Text style={styles.circleLabel}>{label}</Text>
    </View>
  );
};

interface MealModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIGHT_BLUE = '#4A90E2';

export default function MealModal({ visible, onClose, title }: MealModalProps) {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(visible);

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
      onClose();
    });
  };

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (modalVisible) {
      closeModal();
    }
  }, [visible]);

  const renderFoodItem = (name: string, quantity: string) => (
    <Text style={styles.foodItem}>
      <Text style={styles.foodName}>{name}</Text>
      <Text style={styles.foodQuantity}> {quantity}</Text>
    </Text>
  );

  const renderNutritionRow = (label: string, value: string, bold: boolean = false, compact: boolean = false) => (
    <View style={[styles.nutritionRow, compact && styles.compactRow]}>
      <Text style={[
        styles.nutritionLabel,
        bold && styles.boldText,
        !bold && styles.lightText
      ]}>
        {label}
      </Text>
      <Text style={[
        styles.nutritionValue,
        bold && styles.boldText,
        !bold && styles.lightText
      ]}>
        {value}
      </Text>
    </View>
  );

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="none"
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <BlurView 
              intensity={100} 
              tint="light"
              style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(255, 255, 255, 0.3)' }]}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.handleContainer}>
            <Pressable onPress={closeModal} style={styles.handle}>
              <ArrowDownIcon width={20} height={20} />
            </Pressable>
          </View>

          <View style={styles.mealInfoContainer}>
            <View style={styles.mealHeaderContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.mealTitle}>{title}</Text>
                <Text style={[styles.calories, styles.caloriesSpacing]}>325 Kcal</Text>
              </View>
              <View style={styles.circlesContainer}>
                <CircularProgress percentage={25} value="5g" label="Protéines" color="#FF6B6B" />
                <CircularProgress percentage={45} value="6g" label="Lipides" color="#4A90E2" />
                <CircularProgress percentage={70} value="7g" label="Glucides" color="#4CAF50" />
              </View>
            </View>
          </View>
          
          <View style={styles.foodList}>
            {renderFoodItem("Pomme", "80g")}
            {renderFoodItem("Yaourt grec", "70g")}
            {renderFoodItem("Noix", "20g")}
          </View>

          <View style={styles.nutritionContainer}>
            {renderNutritionRow("Total des calories", "325Kcal", true)}
            {renderNutritionRow("Protéines", "5g", true)}
            {renderNutritionRow("Lipides", "6g", true, true)}
            {renderNutritionRow("Acides gras saturés", "0,4g", false, true)}
            {renderNutritionRow("Cholestérol", "0,09g", false)}
            {renderNutritionRow("Glucides", "7g", true, true)}
            {renderNutritionRow("Sucres", "4g", false, true)}
            {renderNutritionRow("Polyols", "0,07g", false)}
            {renderNutritionRow("Fibres", "6g", true)}
            {renderNutritionRow("Vitamines", "?", true, true)}
            {renderNutritionRow("Vitamine A", "?", false, true)}
            {renderNutritionRow("Vitamine B1 - Thiamine", "?", false, true)}
            {renderNutritionRow("Vitamine B2 - Riboflavine", "?", false, true)}
            {renderNutritionRow("Vitamine B3 - Niacine", "?", false, true)}
            {renderNutritionRow("Vitamine B5 - Acide pantothérique", "?", false, true)}
            {renderNutritionRow("Vitamine B6", "?", false, true)}
            {renderNutritionRow("Vitamine B9 - Folate", "?", false, true)}
            {renderNutritionRow("Vitamine B12", "?", false, true)}
            {renderNutritionRow("Vitamine C", "?", false, true)}
            {renderNutritionRow("Vitamine K1", "?", false)}
            {renderNutritionRow("Minéraux", "?", true, true)}
            {renderNutritionRow("Calcium", "?", false, true)}
            {renderNutritionRow("Chlorure", "?", false, true)}
            {renderNutritionRow("Cuivre", "?", false, true)}
            {renderNutritionRow("Fer", "?", false, true)}
            {renderNutritionRow("Iode", "?", false, true)}
            {renderNutritionRow("Magnésium", "?", false, true)}
            {renderNutritionRow("Phosphore", "?", false, true)}
            {renderNutritionRow("Potassium", "?", false, true)}
            {renderNutritionRow("Zinc", "?", false, true)}
          </View>
          <View style={styles.deleteButtonContainer}>
            <Pressable style={styles.deleteButton} onPress={() => {}}>
              <Text style={styles.deleteButtonText}>Supprimer ce repas</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    height: SCREEN_HEIGHT * 0.85,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
    paddingTop: 10,
    borderWidth: 5,
    borderColor: LIGHT_BLUE,
    borderBottomWidth: 0,
  },
  handleContainer: {
    alignItems: 'center',
    marginBottom: 2,
  },
  handle: {
    padding: 4,
    marginTop: -2,
  },
  mealInfoContainer: {
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 30,
  },
  mealHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  mealTitle: {
    fontSize: 13,
    color: Colors.darkgreen,
    fontFamily: 'Geologica',
    fontWeight: '700',
    lineHeight: 15,
  },
  calories: {
    fontSize: 11,
    color: Colors.darkgreen,
    fontFamily: 'Geologica',
    fontWeight: '300',
    lineHeight: 13,
  },
  caloriesSpacing: {
    marginTop: -2,
  },
  foodList: {
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 30,
  },
  foodItem: {
    fontSize: 11,
    marginBottom: 1,
    fontFamily: 'Geologica',
    color: Colors.darkgreen,
  },
  foodName: {
    fontWeight: '700',
  },
  foodQuantity: {
    fontWeight: '300',
  },
  nutritionContainer: {
    marginTop: 5,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingRight: 40,
    paddingLeft: 30,
  },
  compactRow: {
    marginBottom: 4,
  },
  nutritionLabel: {
    fontSize: 10,
    fontFamily: 'Geologica',
    color: 'black',
    marginRight: 40,
  },
  nutritionValue: {
    fontSize: 10,
    fontFamily: 'Geologica',
    color: 'black',
  },
  boldText: {
    fontWeight: '700',
  },
  lightText: {
    fontSize: 9,
    fontWeight: '300',
  },
  deleteButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.darkgreen,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: Colors.darkgreen,
    fontFamily: 'Geologica',
    fontSize: 12,
    fontWeight: '500',
  },
  circlesContainer: {
    flexDirection: 'row',
    gap: 15,
    marginRight: 20,
  },
  circleContainer: {
    alignItems: 'center',
  },
  circleLabel: {
    fontSize: 9,
    color: 'black',
    fontFamily: 'Geologica',
    marginTop: 2,
  },
}); 