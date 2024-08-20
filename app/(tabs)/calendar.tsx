import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar as BigCalendar, Mode } from 'react-native-big-calendar';
import { Calendar } from "react-native-calendars";
import { PickerValue } from "react-native-ui-lib";
import Picker from "react-native-ui-lib/picker";
import Switch from "react-native-ui-lib/switch";

// https://wix.github.io/react-native-ui-lib/docs/components/controls/Switch
// https://github.com/wix/react-native-calendars
// https://github.com/acro5piano/react-native-big-calendar

// https://github.com/dorkyboi/react-native-calendar-timetable ?

const events = [
    {
      title: 'Meeting',
      start: new Date(2020, 1, 11, 10, 0),
      end: new Date(2020, 1, 11, 10, 30),
    },
    {
      title: 'Coffee break',
      start: new Date(2020, 1, 11, 15, 45),
      end: new Date(2020, 1, 11, 16, 30),
    },
]

export default function TabCalendarScreen() {
    const [useBigCalendars, setUseBigCalendars] = useState(false);

    const calendars = <Calendar
        // Customize the appearance of the calendar
        style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 350
        }}
        // Specify the current date
        current={'2012-03-01'}
        // Callback that gets called when the user selects a day
        onDayPress={(day: any) => {
            console.log('selected day', day);
        }}
        // Mark specific dates as marked
        markedDates={{
            '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-03-02': {marked: true},
            '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
        }}
    />

    const modes: Mode[] = ['3days', 'week', 'day', 'custom', 'month', 'schedule'];
    const [mode, setMode] = useState('week' as Mode);

    const bigCalendar = <BigCalendar
        events={events}
        height={600}
        mode={mode}
        date={new Date(2020, 1, 11)}
        activeDate={new Date(2020, 1, 12)} />;

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Calendar</ThemedText>
            </ThemedView>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="default">RN Calendars</ThemedText>
                <Switch value={useBigCalendars} onValueChange={() => setUseBigCalendars(!useBigCalendars)}/>
                <ThemedText type="default">RN Big Calendar</ThemedText>
            </ThemedView>

            {useBigCalendars ? <Picker
                value={mode}
                placeholder={'Placeholder'}
                onChange={(selected: PickerValue) => setMode(selected?.valueOf() as Mode)}
                >
                {modes.map((item: Mode, i: number) => <Picker.Item key={i} value={item} label={item} />)}
            </Picker> : null}

            { useBigCalendars ?  bigCalendar : calendars }


        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});