import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GameCard from "../../components/Card/GameCard";
import MovieCard from "../../components/Card/MovieCard";
import { DataContext } from "../../components/Context/DataContext";

export default function HomePage() {
   const { fetchMovies, fetchGames, moviesData, gamesData } = useContext(DataContext)
   const textStyle = {
      color: "#9e9e9e",
      marginBottom: 20,
   }

   useEffect(() => {
      fetchMovies()
      fetchGames()
   },[])

	return (
		<>
         <Typography variant="h5" style={textStyle}>Movies</Typography>
			<Grid container style={{justifyContent: 'center'}}>
				<Grid item xs={false} sm={1} md={1} lg xl/>
				<Grid item container xs={12} sm={10} md={10} lg={11} xl={11} spacing={6}>
               {moviesData.map(movie =>
                  <Grid key={movie.id} item sm={6} md={6} lg={4} xl={3}>
                     <Link to={`/movies/details/${movie.id}`}>
                        <MovieCard movie={movie}/>
                     </Link>
                  </Grid>
               )}
				</Grid>
				<Grid item xs={false} sm={1} md={1} lg xl/>
			</Grid>
         <Divider light style={{margin: '30px 0'}}/>
         <Typography variant="h5" style={textStyle}>Games</Typography>
			<Grid container style={{justifyContent: 'center'}}>
            <Grid item xs={false} sm={1} md={1} lg xl/>
				<Grid item container xs={12} sm={10} md={10} lg={11} xl={11} spacing={6}>
               {gamesData.map(game =>
                  <Grid key={game.id} item sm={6} md={6} lg={4} xl={3}>
                     <Link to={`/games/details/${game.id}`}>
                        <GameCard game={game}/>
                     </Link>
                  </Grid>
               )}
				</Grid>
				<Grid item xs={false} sm={1} md={1} lg xl/>
			</Grid>
		</>
	);
}
