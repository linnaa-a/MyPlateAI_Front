import React from 'react'
import { Pressable, PressableProps, ViewStyle } from 'react-native'

interface AnimatedPressableProps extends PressableProps {
    children: React.ReactNode
    scaleValue?: number
    style?: ViewStyle | ((state: { pressed: boolean }) => ViewStyle)
}

const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
    children,
    style,
    scaleValue = 0.98,
    ...pressableProps
}) => {
    const getAnimatedStyle = (pressed: boolean) => {
        const baseStyle = typeof style === 'function' ? style({ pressed }) : style

        return [
            baseStyle,
            {
                transform: pressed ? [{ scale: scaleValue }] : [{ scale: 1 }],
                transition: 'transform 0.1s ease',
            }
        ]
    }

    return (
        <Pressable
            style={({ pressed }) => getAnimatedStyle(pressed)}
            {...pressableProps}
        >
            {children}
        </Pressable>
    )
}

export { AnimatedPressable }