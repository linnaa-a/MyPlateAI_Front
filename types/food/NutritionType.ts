export type NutritionType = {
    unit: string;
    value: number;
    title: string;
    backgroundColor: string;
};

export type NutritionOverviewProps = {
    nutrition: NutritionType[];
};