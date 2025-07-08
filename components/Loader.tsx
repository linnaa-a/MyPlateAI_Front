import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
import { styles } from '../styles/global'

const Loader = () => {
  const bounceAnim1 = useRef(new Animated.Value(0)).current
  const bounceAnim2 = useRef(new Animated.Value(0)).current
  const bounceAnim3 = useRef(new Animated.Value(0)).current

  const startAnimation = () => {
    const createBounceAnimation = (animValue: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animValue, {
            toValue: 1,
            duration: 600,
            easing: Easing.bezier(0.68, -0.55, 0.265, 1.55),
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 600,
            easing: Easing.bezier(0.68, -0.55, 0.265, 1.55),
            useNativeDriver: true,
          }),
        ])
      )
    }
    createBounceAnimation(bounceAnim1, 0).start()
    createBounceAnimation(bounceAnim2, 200).start()
    createBounceAnimation(bounceAnim3, 400).start()
  }

  useEffect(() => {
    startAnimation()
  }, [])

  const getTranslateY = (animValue: Animated.Value) => {
    return animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20],
    })
  }

  const getScale = (animValue: Animated.Value) => {
    return animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.2],
    })
  }

  const getOpacity = (animValue: Animated.Value) => {
    return animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.7, 1],
    })
  }

  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loader}>
        <Animated.View
          style={[
            styles.dot,
            styles.dot1,
            {
              transform: [
                { translateY: getTranslateY(bounceAnim1) },
                { scale: getScale(bounceAnim1) }
              ],
              opacity: getOpacity(bounceAnim1),
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            styles.dot2,
            {
              transform: [
                { translateY: getTranslateY(bounceAnim2) },
                { scale: getScale(bounceAnim2) }
              ],
              opacity: getOpacity(bounceAnim2),
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            styles.dot3,
            {
              transform: [
                { translateY: getTranslateY(bounceAnim3) },
                { scale: getScale(bounceAnim3) }
              ],
              opacity: getOpacity(bounceAnim3),
            },
          ]}
        />
      </View>
    </View>
  )
}

export default Loader