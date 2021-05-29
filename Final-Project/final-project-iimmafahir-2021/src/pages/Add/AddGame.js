import { InputAdornment, Snackbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexFlow: "column wrap",
	},
}));

export default function AddGame() {
	const empty = {
		name: "",
		genre: "",
		release: "",
		singlePlayer: "",
		multiplayer: "",
		platform: "",
		image_url: "",
	};

	const [gameData, setGameData] = useState(empty);
	const [formValid, setFormValid] = useState(false);
	const [alert, setAlert] = useState(false);
	const classes = useStyles();
	const {user} = useContext(AuthContext);

	useEffect(() => {
		if (Object.values(gameData).every(el => el !== "")) {
			setFormValid(true)
		} else {
			setFormValid(false)
		}
	}, [gameData, setGameData])

	const handleChange = event => {
		setGameData({...gameData, [event.target.name]: event.target.value});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setAlert(false);
	};

	const postData = event => {
		let {
			name,
			genre,
			release,
			singlePlayer,
			multiplayer,
			platform,
			image_url,
		} = gameData;

		axios.post(
				`http://backendexample.sanbercloud.com/api/data-game`,
				{
					name,
					genre,
					release,
					singlePlayer,
					multiplayer,
					platform,
					image_url,
				},
				{headers: {Authorization: `Bearer ${user.token}`}}
			)
			.then(() => {
				setAlert(true);
				setGameData(empty);
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
							label="Name"
							name="name"
							id="name"
							fullWidth
							defaultValue=" "
							value={gameData.name}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Genre"
							name="genre"
							id="genre"
							fullWidth
							defaultValue=" "
							value={gameData.genre}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Platform"
							name="platform"
							id="platform"
							fullWidth
							defaultValue=" "
							value={gameData.platform}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Image URL"
							name="image_url"
							id="image-url"
							fullWidth
							defaultValue=" "
							value={gameData.image_url}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Release"
							name="release"
							id="release"
							fullWidth
							defaultValue=" "
							value={gameData.release}
							onChange={handleChange}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Singleplayer"
							name="singlePlayer"
							id="singlePlayer"
							fullWidth
							defaultValue=" "
							value={gameData.singlePlayer}
							onChange={handleChange}
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										Player
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label="Multiplayer"
							name="multiplayer"
							id="multiplayer"
							fullWidth
							defaultValue=" "
							value={gameData.multiplayer}
							onChange={handleChange}
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										Player
									</InputAdornment>
								),
							}}
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
