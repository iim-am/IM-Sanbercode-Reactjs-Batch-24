import Grid from "@material-ui/core/Grid";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GameCard from "../../components/Card/GameCard";
import { DataContext } from "../../components/Context/DataContext";

export default function Games() {
   const { gamesData, fetchGames } = useContext(DataContext)

   useEffect(() => {
      fetchGames()
   },[])

	return (
		<>
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
