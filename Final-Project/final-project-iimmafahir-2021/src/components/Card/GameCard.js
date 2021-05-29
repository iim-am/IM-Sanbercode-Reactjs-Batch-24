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
		width: "88%",
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

export const GameCard = React.memo(function GameCard(props) {
	const yearStyle = {
		width: 65,
		height: 31,
		backgroundImage: "linear-gradient(147deg, #39d0fe 0%, #3876fd 74%)",
		boxShadow: "0px 4px 32px rgba(56, 85, 252, 0.4)",
		borderRadius: 100,
		padding: "5px 10px",
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

	return (
		<Card
			className={cx(classes.root, shadowStyles.root)}
			onClick={() => console.log("cluck")}
		>
			<CardMedia
				className={classes.media}
				image={
					props.game.image_url !== null
						? props.game.image_url
						: imagePlaceHolder
				}
			/>
			<CardContent>
				<TextInfoContent
					classes={contentStyles}
					overline={props.game.genre}
					heading={props.game.name}
					body={`Platform: ${props.game.platform}`}
				/>
				<Typography style={yearStyle}>
					{props.game.release}
				</Typography>
			</CardContent>
		</Card>
	);
});

export default GameCard;
