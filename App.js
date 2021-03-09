import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Platform, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';

const App = props => {

  const [workTime, setWorkTime] = useState('')
  const [breakTime, setBreakTime] = useState('')
  const [times, setTimes] = useState([])

  return (

    <SafeAreaView style={styles.safeAreaView}>

        <View style={styles.headerContainer}>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Pomodoro</Text>
            </View>

            <View style={styles.TimeContainer}>

              <Text style={styles.textStyle}>Please Enter Work Time:</Text>
              <View>
                <TextInput style={styles.textInputStyle} placeholder="Working Minutes" placeholderTextColor='#7f8c8d' 
                  value={workTime} onChangeText={(time) => setWorkTime(time)}></TextInput>
              </View>

              <Text style={styles.textStyle}>Please Enter Break Time:</Text>
              <View>
                <TextInput style={styles.textInputStyle} placeholder="Break Minutes" placeholderTextColor='#7f8c8d' 
                  value={breakTime} onChangeText={(time) => setBreakTime(time)}></TextInput>
              </View>
              <TouchableOpacity onPress={() => {
                let timeList = []
                let newWorkTime = workTime;
                let newBreakTime = breakTime;
                timeList.push(workTime);
                timeList.push(breakTime);
                setTimes(timeList);
                setWorkTime('');
                setBreakTime('');
              }}>
                <Text>Submit</Text>
              </TouchableOpacity>

            </View>

            

        </View>

        <View style={styles.contentContainer}>
          {times.map((time, index) => {
            return (
              <Text>{time*60} seconds</Text>
            )
          })}

        </View>

    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },

  headerContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  TimeContainer: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    padding: 5,
  },
  textInputStyle: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: 3,
  },

  contentContainer: {
    flex: 2,
    backgroundColor: 'yellow',
  },
});

export default App;
