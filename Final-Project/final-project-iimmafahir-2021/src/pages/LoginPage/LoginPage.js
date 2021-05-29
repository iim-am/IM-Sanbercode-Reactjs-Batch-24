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
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function LoginPage() {
	const {removeNav, restoreNav} = useContext(NavContext);
	const {setUser, setIsLoggedIn, isLoggedIn} = useContext(AuthContext);
   const [input, setInput] = useState({
		email: "",
		password: "",
	});
   const history = useHistory();

	//Hide nav on login page
	useEffect(() => {
		removeNav();
		return () => restoreNav();
	});

	const classes = useStyles();

	const handleLogin = event => {
		event.preventDefault();
		axios.post("https://backendexample.sanbersy.com/api/user-login", {
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
      setInput({...input, [event.target.name]: event.target.value})
   }

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<form
					className={classes.form}
					onSubmit={handleLogin}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
                  autoFocus
                  onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Login
					</Button>
					<Grid container>
						<Grid item>
							<Link to="/signup">
								<Typography variant="body2">
									Don't have an account? Sign Up
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
