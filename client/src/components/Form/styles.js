import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
		borderRadius: "15px",
		backgroundImage:
			"linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
		backdropFilter: "blur(5px)",
		backgroundColor: "rgba(255,255,255,0)",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "100%",
		margin: "10px 0",
	},
	buttonSubmit: {
		marginBottom: 10,
		backgroundColor: "#3262aa",
		color: "white",
	},
}));
