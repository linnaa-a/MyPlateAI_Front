import {View, Text, Pressable} from 'react-native';
import { DateComponentProps, CalendarComponentProps } from '../types/CalendarComponentType';
import { styles as datestyle} from '../styles/calendar/DateComponentStyle';
import { styles as calendarstyle} from '../styles/calendar/CalendarComponentStyle';
import { styles as globalstyle, styles} from '../styles/global';
import {Svg, Rect, Line, Text as SvgText, Path} from 'react-native-svg';
import colors from '../constants/Colors';
import { useEffect, useState } from 'react';

function convertDateToDay(date: Date, mode: 'short' | 'long' | 'narrow' = 'short', capitalize: boolean=false): string {
    let datestr = date.toLocaleDateString("fr-FR", { weekday: mode }).replace(".", "");
    
    if (capitalize) {
        datestr = datestr.charAt(0).toUpperCase() + datestr.slice(1);
    }

    return datestr
  }

function convertDateToDayNumber(date: Date): string {
    return date.getDate().toString();
}


function getThisWeekDates(): Date[] {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day == 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));

    let dates = [];
    for (let i = 0; i < 7; i++) {
        dates.push(new Date(monday));
        monday.setDate(monday.getDate() + 1);
    }
    return dates;
}

function createDateString(date: Date): {day: string, date: string} {
    let day = date.toLocaleDateString("fr-FR", { weekday: "long" });
    const month = date.toLocaleDateString("fr-FR", { month: "long" });
    const dateNumber = date.getDate();
    const year = date.getFullYear();

    if (date.toDateString() === new Date().toDateString()) {
        day = "Aujourd'hui";
    }

    return {
        day,
        date: `${dateNumber} ${month} ${year}`
    }
}


const DateComponent = ({ date, fill_percentage, onDatePress, is_today }: DateComponentProps) => {

  const width = 70;
  const height = 100;
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

  return (
    <Pressable onPress={() => onDatePress(date)}>
        <Svg
        width="40"
        height={60}
        viewBox='0 0 80 100'
        >
            <Rect
                x="2"
                y="2"
                width={width}
                height={height}
                rx={borderRadius}
                fill={is_today ? colors.darkgreen : "white"}
                stroke={colors.darkgrey}
                strokeWidth="4"
            />
            
            <Path
                d={`
                M ${2 + borderRadius} 2
                h ${width - 2 * borderRadius}
                a ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} ${borderRadius}
                v ${height - 2 * borderRadius}
                a ${borderRadius} ${borderRadius} 0 0 1 -${borderRadius} ${borderRadius}
                h -${width - 2 * borderRadius}
                a ${borderRadius} ${borderRadius} 0 0 1 -${borderRadius} -${borderRadius}
                v -${height - 2 * borderRadius}
                a ${borderRadius} ${borderRadius} 0 0 1 ${borderRadius} -${borderRadius}
                `}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={perimeter}
                strokeDashoffset={perimeter - progressLength}
            />

            <SvgText x="37" y="32" fontSize="22" fill={is_today ? "white" : "black"} textAnchor="middle" font={globalstyle.text}>
                {convertDateToDay(date, 'short', true)}
            </SvgText>

            <SvgText x="37" y="82" fontSize="20" fill={is_today ? "white" : "black"} textAnchor="middle" font={globalstyle.text}>
                {convertDateToDayNumber(date)}
            </SvgText>
        </Svg>
    </Pressable>
  )
};



export default function CalendarComponent({onDatePress, selectedDate}: CalendarComponentProps) {
    
    const [text, setText] = useState(createDateString(selectedDate));
    const [dates, setDates] = useState(getThisWeekDates());

    useEffect(() => {
        setText(createDateString(selectedDate));
    }, [selectedDate]);
    

    return (
        <View>
            <View style={calendarstyle["text-block"]}>
                <Text style={[globalstyle.text,{
                    textTransform: "capitalize",
                    fontSize: 15,
                    fontWeight: "bold",
                }]}>{text.day}</Text>
                <Text style={[globalstyle.text, {fontWeight: 100}]}>, {text.date}</Text>
            </View>
            <View style={calendarstyle["calendar-block"]}>
                {dates.map((date, i) => (
                    <DateComponent 
                        key={i}
                        date={date}
                        fill_percentage={Math.random() * 120}
                        onDatePress={onDatePress}
                        is_today={date.toDateString() === selectedDate.toDateString()}
                    />
                ))}
            </View>
        </View>
    )
}
