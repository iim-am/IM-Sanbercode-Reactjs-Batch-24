import { Link, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (
			<Typography variant="body2" align="center">
				{"Created by "}
				<Link color="inherit" href="https://github.com/iim-am/">
					Iim Mafahir
				</Link>
			</Typography>
		);
	}
}
