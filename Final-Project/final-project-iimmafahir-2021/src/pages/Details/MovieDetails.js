import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
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

export default function MovieDetails({match}) {
  const classes = useStyles();
  const [movieData, setMovieData] = useState({})

  useEffect(() => {
     fetchMovie()
  }, [])

  const fetchMovie = async() => {
      const res = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${match.params.id}`)
      setMovieData(res.data)
   }

   const imageStyle = {
      width: 'auto',
      height: '75vh',
      backgroundImage: `url(${movieData.image_url})`,
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
                        <Typography gutterBottom variant="h4">{movieData.title}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography variant="subtitle1"><b>Genre : </b>{movieData.genre}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography variant="subtitle1"><b>Year : </b>{movieData.year}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography gutterBottom variant="subtitle1"><b>Duration : </b>{movieData.duration} minutes</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography gutterBottom variant="body1">{movieData.description}</Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <Typography component="legend">Rating</Typography>
                        <Rating name="customized-10" value={`${movieData.rating}`} max={10} readOnly/>
                     </Grid>
                  </Grid>
               </Paper>
            </Grid>
         </Grid>
    </div>
  );
}