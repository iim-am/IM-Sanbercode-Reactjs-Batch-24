import Grid from "@material-ui/core/Grid";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/Card/MovieCard";
import { DataContext } from "../../components/Context/DataContext";

export default function Movies() {
   const { fetchMovies, moviesData } = useContext(DataContext)

   useEffect(() => {
      fetchMovies()
   },[])

	return (
		<>
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
		</>
	);
}
