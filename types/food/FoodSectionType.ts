import { SvgProps } from 'react-native-svg';

export type FoodSectionProps = {
    title: string,
    illustration: React.FC<SvgProps>,
    left?: boolean
}

export type Items = {
    "name": string,
    "quantity": number,
    "unit": string
}