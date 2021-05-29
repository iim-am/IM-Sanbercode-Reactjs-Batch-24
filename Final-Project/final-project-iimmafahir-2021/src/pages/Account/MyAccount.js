import {
	Button,
	Grid,
	makeStyles,
	Snackbar,
	TextField,
	Typography
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexFlow: "column nowrap",
	},
}));

const inputDefault = {
	current_password: "",
	new_password: "",
	new_confirm_password: "",
};

export default function MyAccount() {
	const [input, setInput] = useState(inputDefault);
	const [isValid, setIsValid] = useState({password: true, passMatch: true});
	const [formValid, setFormValid] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState("");
	const {user} = useContext(AuthContext);
	const classes = useStyles();

	//Validation
	useEffect(() => {
		console.log(user.password);
		if (input.new_password !== "") {
			if (/\S/.test(input.new_password)) {
				setIsValid({...isValid, password: true});
			} else {
				setIsValid({...isValid, password: false});
			}
		}
	}, [input.new_password]);

	useEffect(() => {
		if (input.new_password !== "" && input.new_confirm_password !== "") {
			if (input.new_password !== input.new_confirm_password) {
				setIsValid({...isValid, passMatch: false});
			} else {
				setIsValid({...isValid, passMatch: true});
			}
		}
	}, [input.new_password, input.new_confirm_password]);

	useEffect(() => {
		if (Object.values(input).every(el => el !== "")) {
			if (Object.values(isValid).every(el => el === true)) {
				setFormValid(true);
			} else {
				setFormValid(false);
			}
		} else {
			setFormValid(false);
		}
	}, [isValid, setIsValid]);

	const changePass = event => {
		event.preventDefault();
		let {current_password, new_password, new_confirm_pasword} = input;

		axios
			.post(
				`https://backendexample.sanbersy.com/api/change-password`,
				{
					current_password,
					new_password,
					new_confirm_pasword,
				},
				{headers: {Authorization: `Bearer ${user.token}`}}
			)
			.then(() => {
				setInput(inputDefault);
				setOpenSnackbar("success");
				setFormValid(false);
			})
			.catch(() => {
				setFormValid(false);
				setOpenSnackbar("error");
			});
	};

	const handleChange = event => {
		setInput({...input, [event.target.name]: event.target.value});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackbar(false);
	};

	return (
		<div className={classes.root}>
			<Snackbar
				open={openSnackbar === "error"}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="error">
					Password incorrect
				</Alert>
			</Snackbar>
			<Snackbar
				open={openSnackbar === "success"}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success">
					Password updated
				</Alert>
			</Snackbar>
			<form onSubmit={changePass}>
				<Grid container spacing={3} item>
					<Grid item xs={12} style={{marginBottom: 45, marginTop: 20}}>
						<Typography gutterBottom variant="h3">Hello {user.name}</Typography>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							disabled
							id="username"
							label="Username"
							defaultValue={user.name}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							fullWidth
							disabled
							id="email"
							label="Email"
							defaultValue={user.email}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							fullWidth
							required
							id="current_password"
							name="current_password"
							label="Current password"
							value={input.current_password}
							variant="outlined"
							type="password"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							fullWidth
							required
							id="new_password"
							name="new_password"
							label="New password"
							value={input.new_password}
							variant="outlined"
							type="password"
							onChange={handleChange}
							error={!isValid.password}
							helperText={
								!isValid.password &&
								"Password must include non-whitespace character"
							}
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							fullWidth
							required
							id="new_confirm_password"
							name="new_confirm_password"
							label="Confirm new password"
							value={input.new_confirm_password}
							variant="outlined"
							type="password"
							onChange={handleChange}
							error={!isValid.passMatch}
							helperText={
								!isValid.passMatch && "Password should match"
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							type="submit"
							color="primary"
							disabled={!formValid}
						>
							Change Password
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}
