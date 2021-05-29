import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { DataContext } from "../Context/DataContext";

export default function GamesTable() {
	const {fetchGames, gamesData, setGamesData} = useContext(DataContext);
	const {user} = useContext(AuthContext);

	useEffect(() => {
		fetchGames();
	}, []);

	const deleteGame = (id) => {
		axios.delete(
			` https://backendexample.sanbersy.com/api/data-game/${id}`,
			{headers: {Authorization: `Bearer ${user.token}`}}
		)
		.then(() => {
			let updateGames = gamesData.filter(game => game.id !== parseInt(id))
			setGamesData(updateGames)
		})
	};

	const columns = [
		{
			name: "name",
			label: "Name",
			options: {
				sort: true,
				filter: false,
			},
		},
		{
			name: "genre",
			label: "Genre",
			options: {
				sort: true,
				filter: true,
			},
		},
		{
			name: "release",
			label: "Release",
			options: {
				sort: true,
				filter: true,
			},
		},
		{
			name: "platform",
			label: "Platform",
			options: {
				sort: true,
				filter: true,
			},
		},
		{
			name: "singlePlayer",
			label: "Single Player",
			options: {
				sort: true,
				filter: true,
			},
		},
		{
			name: "multiPlayer",
			label: "Multiplayer",
			options: {
				sort: true,
				filter: true,
			},
		},
		{
			name: "id",
			label: "Actions",
			options: {
				sort: false,
				filter: false,
				customBodyRender: (value, tableMeta, updateValue) => (
					<>
						<Link to={`/games/edit/${value}`}>
							<IconButton value={value}>
								<EditIcon />
							</IconButton>
						</Link>
						<IconButton value={value} onClick={() => deleteGame(value)}>
							<DeleteIcon />
						</IconButton>
					</>
				),
			},
		},
	];

	const data = gamesData.map(game => {
		const {
			name,
			genre,
			release,
			platform,
			singlePlayer,
			multiplayer,
			id,
		} = game;
		return {name, genre, release, platform, singlePlayer, multiplayer, id};
	});

	const options = {
		filterType: "dropdown",
		download: false,
		print: false,
		selectableRows: "none",
		selectableRowsHeader: false,
	};

	return (
		<>
			<MUIDataTable
				title={"Game list"}
				data={data}
				columns={columns}
				options={options}
			/>
		</>
	);
}
