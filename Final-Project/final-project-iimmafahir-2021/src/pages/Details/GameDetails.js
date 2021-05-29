import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginLeft: 15,
  },
}));

export default function GameDetails({match}) {
  const classes = useStyles();
  const [gameData, setGameData] = useState({})

  useEffect(() => {
     fetchGame()
  }, [])

  const fetchGame = async() => {
      const res = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${match.params.id}`)
      setGameData(res.data)
   }

   const imageStyle = {
      width: 'auto',
      height: '75vh',
      backgroundImage: `url(${gameData.image_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   }

  return (
    <div className={classes.root}>
         <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item xs>
               <Paper style={imageStyle} elevation={0}/>
            </Grid>
            <Grid item xs>
               <Paper className={classes.paper} elevation={7}>
                  <Grid container direction="column">
                     <Grid item xs={12}>
                        <Typography gutterBottom variant="h4">{gameData.name}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography variant="subtitle1"><b>Genre : </b>{gameData.genre}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography variant="subtitle1"><b>Release : </b>{gameData.release}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography variant="subtitle1"><b>Singleplayer : </b>{gameData.singlePlayer} player</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography variant="subtitle1"><b>Multiplayer : </b>{gameData.multiPlayer ? gameData.multiPlayer : '0' } player</Typography>
                     </Grid>
                  </Grid>
               </Paper>
            </Grid>
         </Grid>
    </div>
  );
}