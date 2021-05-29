import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";
import { NavContext } from "../../components/Context/NavContext";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignupPage() {
	const classes = useStyles();
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isValid, setIsValid] = useState({
		name: true,
		email: true,
		password: true,
		passMatch: true,
	});
	const [formValid, setFormValid] = useState(false);
	const history = useHistory();
	const {removeNav, restoreNav} = useContext(NavContext);
	const {setUser, setIsLoggedIn} = useContext(AuthContext);

	//Hide nav on signup page
	useEffect(() => {
		removeNav();
		return () => restoreNav();
	});

	//Valide form value != whitespace
	useEffect(() => {
		if (input.name !== "") {
			if (/\S/.test(input.name)) {
				setIsValid({...isValid, name: true});
			} else {
				setIsValid({...isValid, name: false});
			}
		}
	}, [input.name]);

	useEffect(() => {
		if (input.email !== "") {
			if (
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
					input.email
				)
			) {
				setIsValid({...isValid, email: true});
			} else {
				setIsValid({...isValid, email: false});
			}
		}
	}, [input.email]);

	useEffect(() => {
		if (input.password !== "") {
			if (/\S/.test(input.password)) {
				setIsValid({...isValid, password: true});
			} else {
				setIsValid({...isValid, password: false});
			}
		}
	}, [input.password]);

	//Validate pass match
	useEffect(() => {
		if (input.password !== "" && input.confirmPassword !== "") {
			if (input.password !== input.confirmPassword) {
				setIsValid({...isValid, passMatch: false});
			} else {
				setIsValid({...isValid, passMatch: true});
			}
		}
	}, [input.password, input.confirmPassword]);

	//Confirm validation
	//Check if all isValid value is true
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

	const handleSignup = event => {
		event.preventDefault();
		axios.post("https://backendexample.sanbersy.com/api/register", {
				name: input.name,
				email: input.email,
				password: input.password,
			})
			.then(res => {
				const {name, email} = res.data.user;
				const token = res.data.token;
				const currentUser = {name, email, token};
				setUser(currentUser);
				setIsLoggedIn(true);
				history.push("/");
			})
			.catch(err => {
				alert(err);
			});
	};

	const handleChange = event => {
		setInput({...input, [event.target.name]: event.target.value});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={handleSignup}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="username"
								label="Username"
								name="name"
								autoComplete="username"
								onChange={handleChange}
								required
								value={input.name}
								error={!isValid.name}
								helperText={
									!isValid.name &&
									"Username must include non-whitespace character"
								}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="email"
								label="Email Address"
								type="email"
								name="email"
								autoComplete="email"
								onChange={handleChange}
								required
								value={input.email}
								error={!isValid.email}
								helperText={!isValid.email && "Email invalid"}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
								required
								value={input.password}
								error={!isValid.passMatch || !isValid.password}
								helperText={
									!isValid.password &&
									"Password must include non-whitespace character"
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								id="confirm-password"
								autoComplete="current-password"
								onChange={handleChange}
								required
								value={input.confirmPassword}
								error={!isValid.passMatch}
								helperText={
									!isValid.passMatch &&
									"Password should match"
								}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={!formValid}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/login">
								<Typography variant="body2">
									Already have an account? Login
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
