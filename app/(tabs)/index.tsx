import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from 'react-native-ui-lib/button';
import Card from 'react-native-ui-lib/card';
import { Colors } from 'react-native-ui-lib/style';
import Text from 'react-native-ui-lib/text';
import View from 'react-native-ui-lib/view';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <Calendar
        // Customize the appearance of the calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350
        }}
        // Specify the current date
        current={'2012-03-01'}
        // Callback that gets called when the user selects a day
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Mark specific dates as marked
        markedDates={{
          '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
          '2012-03-02': {marked: true},
          '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
        }}
      />

      <Card flex center onPress={() => console.log('pressed')}>
        {/* <Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}/>
        <Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}} height={115}/> */}
        <Card.Section
          content={[{text: 'Card content here', text70: true, grey10: true}]}
          contentStyle={{alignItems: 'center'}}
        />
      </Card>

      {/* onPress={() => {}}  */}
      <Card marginR-10 flex height={160} activeOpacity={1} activeScale={0.96}>
        <Card.Section
          bg-$backgroundDangerHeavy
          padding-20
          flex-3
          content={[
            {text: 'Special sale!', text70: true, $textDefaultLight: true},
            {text: '10%', text60: true, $textDefaultLight: true}
          ]}
          contentStyle={{alignItems: 'center'}}
        />
        <Card.Section
          bg-$backgroundElevated
          padding-20
          flex
          content={[{text: 'All site', text70: true, $textDefault: true}]}
          contentStyle={{alignItems: 'center', margin: 0, padding: 0}}
        />
      </Card>

      <Card
          key={0}
          style={{marginBottom: 15}}
        >
          <Card.Section
            imageStyle={{height: 160}}
          />

          <View padding-20>
            <Text text40 $textDefault>
              {'Amazing Desert'}
            </Text>
            <View row>
              <Text text90 color={Colors.$textSuccess}>
                {'Published'}
              </Text>
              <Text text90 $textDefault> | {'31 August 2016'}</Text>
            </View>

            <Text text70 $textDefault>
              {'Reference this table when designing your app’s interface, and make sure'}
            </Text>

            <View>
              <Text text90 $textDisabled>
                {355} Likes
              </Text>
              <View row right>
                <Button
                  style={{marginRight: 10}}
                  text90
                  link
                  label="Feature"
                />
                <Button text90 link label="Share"/>
              </View>
            </View>
          </View>
        </Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
