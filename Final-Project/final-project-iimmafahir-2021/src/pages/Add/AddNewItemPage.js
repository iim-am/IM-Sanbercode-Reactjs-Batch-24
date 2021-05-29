import { MenuItem, TextField } from "@material-ui/core";
import React, { Component } from "react";
import AddGame from "./AddGame";
import AddMovie from "./AddMovie";

const category = [
	{
		value: "movie",
		label: "Movie",
	},
	{
		value: "game",
		label: "Game",
	},
];

export default class AddNewItemPage extends Component {
	constructor(props) {
		super(props);
		this.state = {category: ""};
	}

	handleChange = event => {
		this.setState({category: event.target.value});
	};

	render() {
		return (
			<>
				<TextField
					id="outlined-select-currency"
					select
					label="Category"
					value={this.state.category}
					onChange={this.handleChange}
					helperText={this.state.category === "" && "Please select item category"}
               variant="outlined"
               style={{marginBottom: 30}}
				>
					{category.map(option => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				{this.state.category === 'movie' && <AddMovie />}
				{this.state.category === 'game' && <AddGame />}
			</>
		);
	}
}
