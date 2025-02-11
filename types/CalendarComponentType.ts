export type DateComponentProps = {
    date: Date;
    fill_percentage: number;
    onDatePress: (date: Date) => void;
    is_today: boolean;
};