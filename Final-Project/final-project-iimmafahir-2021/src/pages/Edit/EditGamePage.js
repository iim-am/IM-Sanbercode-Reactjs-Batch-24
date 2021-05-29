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

export default function EditGamePage({match}) {
	const [gameData, setGameData] = useState({});
	const classes = useStyles();
	const history = useHistory();
	const {user} = useContext(AuthContext);

	console.log(user.token)

	useEffect(() => {
		fetchGame();
	}, []);

	const fetchGame = async () => {
		const res = await axios.get(
			`https://backendexample.sanbersy.com/api/data-game/${match.params.id}`
		);
		setGameData(res.data);
	};

	const handleChange = event => {
		setGameData({...gameData, [event.target.name]: event.target.value});
	};

	const putData = event => {
		event.preventDefault();
		let {
			name,
			genre,
			release,
			singlePlayer,
			multiplayer,
			platform,
			image_url,
		} = gameData;

		axios.put(
				`http://backendexample.sanbercloud.com/api/data-game/${match.params.id}`,
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
				history.push("/games/table")
				fetchGame()
			});
	};

	return (
		<div className={classes.root}>
			<form onSubmit={putData}>
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
								endAdornment: <InputAdornment position="end">Player</InputAdornment>,
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
								endAdornment: <InputAdornment position="end">Player</InputAdornment>,
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
					>
						Save
					</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}
