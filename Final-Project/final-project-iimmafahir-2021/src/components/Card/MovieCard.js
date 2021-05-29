import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import cx from "clsx";
import React from "react";
import imagePlaceHolder from "../../img/empty-image-placeholder.png";

const useStyles = makeStyles(({breakpoints, spacing}) => ({
	root: {
		margin: "auto",
		borderRadius: spacing(2), // 16px
		transition: "0.3s",
		boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
		position: "relative",
		maxWidth: 500,
		marginLeft: "auto",
		overflow: "initial",
		background: "#ffffff",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		cursor: "pointer",
		paddingBottom: spacing(2),
		[breakpoints.up("md")]: {
			flexDirection: "row",
			paddingTop: spacing(2),
		},
	},
	media: {
		width: "80%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: spacing(-3),
		height: 0,
		paddingBottom: "48%",
		borderRadius: spacing(2),
		backgroundColor: "#fff",
		position: "relative",
		[breakpoints.up("md")]: {
			width: "100%",
			marginLeft: spacing(-3),
			marginTop: 0,
			transform: "translateX(-8px)",
		},
	},
	content: {
		padding: 24,
	},
	cta: {
		marginTop: 24,
		textTransform: "initial",
	},
}));

export const MovieCard = React.memo(function MovieCard(props) {
	const ratingStyle = {
		width: 70,
		height: 31,
		backgroundImage: "linear-gradient(147deg, #6d39fe 0%, #383bfd 74%)",
		boxShadow: "0px 4px 32px rgba(125, 56, 252, 0.4)",
		borderRadius: 100,
		padding: "4px 10px 8px 10px",
		verticalAlign: "middle",
		textAlign: "end",
		color: "#ffffff",
		fontSize: "0.75rem",
		float: "right",
		fontWeight: "bold",
	};

	const classes = useStyles();
	const {
		button: buttonStyles,
		...contentStyles
	 } = useBlogTextInfoContentStyles();
	const shadowStyles = useOverShadowStyles();

	const textTruncate = (string, length = 95, ending = "...") => {
		if (string === null) return "no description";
		if (string.length > length) {
			return string.substring(0, length - ending.length) + ending;
		} else {
			return string //add pad
		}
	};

	return (
		<Card
			className={cx(classes.root, shadowStyles.root)}
			onClick={() => console.log("cluck")}
		>
			<CardMedia
				className={classes.media}
				image={
					props.movie.image_url !== null
						? props.movie.image_url
						: imagePlaceHolder
				}
			/>
			<CardContent>
				<TextInfoContent
					classes={contentStyles}
					overline={props.movie.genre}
					heading={props.movie.title}
					body={textTruncate(props.movie.description)}
				/>
				<Typography style={ratingStyle}>
					<b style={{fontSize: "1rem"}}>{props.movie.rating}</b>/10
				</Typography>
			</CardContent>
		</Card>
	);
});

export default MovieCard;
