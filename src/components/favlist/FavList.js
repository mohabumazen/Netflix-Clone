import NavBar from "../navbar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../movielist/MovieList";

const FavList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}getMovies`
      );
      const data = await response.data;
      setMoviesList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchMoviesData(), []);
  return (
    <>
      <NavBar />
      <MovieList movies={moviesList} fromFav={true} />
    </>
  );
};

export default FavList;