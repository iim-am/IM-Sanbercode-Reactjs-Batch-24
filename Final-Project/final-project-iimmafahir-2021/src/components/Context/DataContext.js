import axios from "axios";
import React, { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
   const [moviesData, setMoviesData] = useState([]);
   const [gamesData, setGamesData] = useState([]);

	const fetchMovies = async() => {
		const res = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
		setMoviesData(res.data)
	}

	const fetchGames = async() => {
		const res = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
		setGamesData(res.data)
	}

	const value = {
      moviesData,
      setMoviesData,
      gamesData,
		setGamesData,
		fetchMovies,
		fetchGames,
	};

	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	);
}
