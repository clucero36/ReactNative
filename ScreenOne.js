import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const ScreenOne = props => {

  const [movieTitle, setMovieTitle] = useState('')



  return (
    <View>
      <TextInput placeholder="Search for a Movie" value={movieTitle} onChangeText={
        (text) => setMovieTitle(text)} />
      <Button title="Submit" onPress={() => 
        props.navigation.navigate("ScreenTwo", {movieTitle: movieTitle})} />
    </View>
  );

};

const styles = StyleSheet.create({

});

export default ScreenOne;