import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexFlow: "column wrap",
	},
}));

export default function EditMoviePage({match}) {
	const [movieData, setMovieData] = useState({});
	const [isValid, setIsValid] = useState(true);
	const classes = useStyles();
	const history = useHistory();
	const {user} = useContext(AuthContext);

	useEffect(() => {
		fetchMovie();
	}, []);

	useEffect(() => {
		if (movieData.rating > 0 && movieData.rating < 11) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [movieData.rating]);

	const fetchMovie = async () => {
		const res = await axios.get(
			`https://backendexample.sanbersy.com/api/data-movie/${match.params.id}`
		);
		setMovieData(res.data);
	};

	const handleChange = event => {
		setMovieData({...movieData, [event.target.name]: event.target.value});
	};

	const putData = event => {
		event.preventDefault();
		let {
			title,
			description,
			year,
			duration,
			genre,
			rating,
			image_url,
		} = movieData;

		axios
			.put(
				`http://backendexample.sanbercloud.com/api/data-movie/${match.params.id}`,
				{title, description, year, duration, genre, rating, image_url},
				{headers: {Authorization: `Bearer ${user.token}`}}
			)
			.then(() => {
				history.push("/movies/table");
				fetchMovie();
			});
	};

	return (
		<div className={classes.root}>
			<form onSubmit={putData}>
				<Grid container spacing={3} item>
					<Grid item xs={12}>
						<TextField
							label="Title"
							name="title"
							id="title"
							fullWidth
							variant="outlined"
							InputLabelProps={{shrink: true}}
							value={movieData.title}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Genre"
							name="genre"
							id="genre"
							fullWidth
							InputLabelProps={{shrink: true}}
							value={movieData.genre}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Image URL"
							name="image_url"
							id="image-url"
							fullWidth
							InputLabelProps={{shrink: true}}
							value={movieData.image_url}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Rating"
							name="rating"
							id="rating"
							fullWidth
							value={movieData.rating}
							onChange={handleChange}
							variant="outlined"
							InputLabelProps={{shrink: true}}
							type="number"
							error={!isValid}
							helperText={
								!isValid && "Rating is out of range [1 - 10]"
							}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Year"
							name="year"
							id="year"
							fullWidth
							InputLabelProps={{shrink: true}}
							value={movieData.year}
							onChange={handleChange}
							variant="outlined"
							type="number"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Duration"
							name="duration"
							id="duration"
							fullWidth
							InputLabelProps={{shrink: true}}
							value={movieData.duration}
							onChange={handleChange}
							variant="outlined"
							type="number"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										minutes
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Description"
							name="description"
							id="description"
							fullWidth
							multiline
							InputLabelProps={{shrink: true}}
							value={movieData.description}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<SaveIcon />}
							type="submit"
							disabled={!isValid}
						>
							Save
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}
