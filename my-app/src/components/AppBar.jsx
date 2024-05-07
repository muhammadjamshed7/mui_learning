import { AppBar, Toolbar, Typography, Button } from "@mui/material";
const Appbar = () => {
	return (
		<>
			<AppBar>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						background: "lightgray",
					}}
				>
					<Typography variant="h6" color="primary">
						Logo
					</Typography>
					<Button variant="contained">Sign In</Button>
					<Button variant="filled" sx={{ color: "green" }}>
						Sign Out
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Appbar;
