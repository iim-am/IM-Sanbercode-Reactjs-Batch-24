import { InputAdornment, Snackbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexFlow: "column wrap",
	},
}));

export default function AddMovie() {
	const empty = {
		title: "",
		description: "",
		year: "",
		duration: "",
		genre: "",
		rating: "",
		image_url: "",
	};

	const [movieData, setMovieData] = useState(empty);
	const [isValid, setIsValid] = useState(true);
	const [formValid, setFormValid] = useState(false);
	const [alert, setAlert] = useState(false);
	const classes = useStyles();
	const {user} = useContext(AuthContext);
	const isFirstRun = useRef(true);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		if (movieData.rating > 0 && movieData.rating < 11) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [movieData.rating]);

	useEffect(() => {
		if (isValid && Object.values(movieData).every(el => el !== "")) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [isValid, setIsValid, movieData, setMovieData])

	const handleChange = event => {
		setMovieData({...movieData, [event.target.name]: event.target.value});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setAlert(false);
	};

	const postData = event => {
		let {
			title,
			description,
			year,
			duration,
			genre,
			rating,
			image_url,
		} = movieData;

		axios.post(
				`http://backendexample.sanbercloud.com/api/data-movie`,
				{title, description, year, duration, genre, rating, image_url},
				{headers: {Authorization: `Bearer ${user.token}`}}
			)
			.then(() => {
				isFirstRun.current = true;
				setAlert(true);
				setMovieData(empty);
			});

		event.preventDefault();
	};

	return (
		<div className={classes.root}>
			<Snackbar
				open={alert}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success">
					Data submitted
				</Alert>
			</Snackbar>
			<form onSubmit={postData}>
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
							disabled={!formValid}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}
