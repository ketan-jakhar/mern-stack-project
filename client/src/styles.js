import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundImage:
			"linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
		backdropFilter: "blur(5px)",
		backgroundColor: "rgba(255,255,255,0)",
	},
	heading: {
		color: "#000",
		fontWeight: "bold",
	},
	image: {
		marginLeft: "15px",
	},
	[theme.breakpoints.down("sm")]: {
		mainContainer: {
			flexDirection: "column-reverse",
		},
	},
}));
