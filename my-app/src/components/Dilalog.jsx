"use client";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Grid } from "@mui/material";

const Dilalog = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Grid container mt={2} spacing={2}>
				<Grid item md={3}>
					<Button onClick={() => setOpen(true)}>Open Modal</Button>
					<Modal open={open} onClose={() => setOpen(false)}>
						<Box
							position="absolute"
							top="50%"
							left="40%"
							width="400px"
							height="200px"
							textAlign="center"
							sx={{ background: "white" }}
						>
							<Typography mt={4}>This is Modal</Typography>
							<Button variant="contained" onClick={() => setOpen(false)}>
								Close Modal
							</Button>
						</Box>
					</Modal>
				</Grid>
				<Grid item md={6}>
					1
				</Grid>
				<Grid item md={3}>
					1
				</Grid>
			</Grid>
		</>
	);
};

export default Dilalog;
