import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenTwo = props => {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    const getMovies = async (movieTitle) => {

      const responseMovies = await fetch('http://www.omdbapi.com/?apikey=7486bef9&s=' +movieTitle);

      const movies = await responseMovies.json();

      console.log(movies);

      setMovies(movies);
    };

    getMovies(props.route.params.movieTitle);


  });


  return (
    <View>
      <View>
        {movies.map(movie => (
          <Card key={movie.imdbID}>
            <Text>{movie.Title}</Text>
          </Card>
        ))}
      </View>
    </View>
  );

};

const styles = StyleSheet.create({

});

export default ScreenTwo;