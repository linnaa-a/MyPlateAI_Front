import {View, Text} from 'react-native';
import { DateComponentProps } from '../types/CalendarComponent';
import { styles as datestyle} from '../styles/calendar/DateComponent';
import { styles as globalstyle} from '../styles/global';
import {Svg, Rect, Line, Text as SvgText, Path} from 'react-native-svg';
import colors from '../constants/Colors';

function convertDateToDay(date: Date): string {
    return date.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");
  }

function convertDateToDayNumber(date: Date): string {
return date.getDate().toString();
}


const DateComponent: React.FC<DateComponentProps> = ({ date, fill_percentage, is_today }) => {

  const width = 70;
  const height = 110;
  const borderRadius = 15;
  const strokeWidth = 4;
  const perimeter = 2 * (width + height) - 8 * borderRadius + 2 * Math.PI * borderRadius;
  let strokeColor = colors.darkgreen;
  let real_fill_percentage = fill_percentage;

  if (fill_percentage > 100) {
    real_fill_percentage = 100;
    strokeColor = colors.red;
  }
  const progressLength = (real_fill_percentage / 100) * perimeter;


  const path = `
    M ${25 + borderRadius} 20
    h ${width - 2 * borderRadius}
    a ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} ${borderRadius}
    v ${height - 2 * borderRadius}
    a ${borderRadius} ${borderRadius} 0 0 1 -${borderRadius} ${borderRadius}
    h -${width - 2 * borderRadius}
    a ${borderRadius} ${borderRadius} 0 0 1 -${borderRadius} -${borderRadius}
    v -${height - 2 * borderRadius}
    a ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} -${borderRadius}
  `;

  return (
    <Svg width="50" height="90" viewBox="0 0 100 150">
      {/* Fond avec bordure arrondie */}
      <Rect
        x="25"
        y="20"
        width={width}
        height={height}
        fill={is_today ? colors.darkgreen : "white"}
        rx={borderRadius}
        stroke={colors.darkgrey}
        strokeWidth="4"
      />

      <Path
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={perimeter}
        strokeDashoffset={perimeter - progressLength}
      />

      <SvgText x="60" y="50" fontSize="22" fill={is_today ? "white" : "black"} textAnchor="middle">
        {convertDateToDay(date)}
      </SvgText>

      <SvgText x="60" y="105" fontSize="20" fill={is_today ? "white" : "black"} textAnchor="middle">
        {convertDateToDayNumber(date)}
      </SvgText>
    </Svg>
  );
};



export default function CalendarComponent() {
    return (
        <View style={globalstyle["flex-horizontal"]}>
            {Array.from({length: 7}).map((_, i) => (
            <DateComponent 
                key={i}
                date={new Date()}
                fill_percentage={Math.random() * 120}
                is_today={i === 0}
            />
            ))}
        </View>
    )
}
