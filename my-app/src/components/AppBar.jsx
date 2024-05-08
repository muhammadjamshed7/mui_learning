"use client";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Tabs,
	Tab,
	Card,
} from "@mui/material";
import { useState } from "react";
const Appbar = () => {
	const [value, setvalue] = useState(0);
	return (
		<>
			<AppBar sx={{ position: "absolute" }}>
				<Toolbar
					sx={{
						display: "flex",
						// justifyContent: "space-between",
						background: "lightgray",
					}}
				>
					<Typography variant="h6" color="primary">
						Logo
					</Typography>

					<Tabs
						value={value}
						onChange={(e, val) => setvalue(val)}
						sx={{ marginLeft: "auto" }}
						indicatorColor="secondary"
						// textColor="inherit"
					>
						<Tab label="Home" />
						<Tab label="About" />
						<Tab label="Contact" />
					</Tabs>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Appbar;
