"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
// import data from "@/data.js";
const data = [
	{
		userId: "Muhammad Jamshed",
		id: 1,
		title: "sunt aut faellat ",
		body: "https://images.unsplash.com/photo-1715112118709-296c5a0c7ee1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
	},
	{
		userId: "Waleed",
		id: 2,
		title: "qui est esse",
		body: "https://images.unsplash.com/photo-1715045086640-09ceccc6fdcc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		userId: "Ateeb",
		id: 3,
		title: "ea mt aut",
		body: "https://images.unsplash.com/photo-1714906472874-63482f7cef44?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		userId: "Saulat",
		id: 4,
		title: "eum et est ",
		body: "https://images.unsplash.com/photo-1714765717963-77b398825d7d?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const Cards = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Grid container spacing={4}>
				{data.map((item, val) => (
					<Grid
						item
						md={6}
						lg={3}
						sm={12}
						key={val}
						display="flex"
						justifyContent="center"
						alignItem="center"
					>
						<Card
							elevation={12}
							sx={{
								maxWidth: 335,

								marginTop: "80px",
							}}
						>
							<CardContent>
								<Typography>{item.userId}</Typography>
							</CardContent>
							<CardMedia
								component="img"
								height="150px"
								image={item.body}
								alt="green iguana"
							></CardMedia>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h1">
									{item.title}
								</Typography>
								<Typography gutterBottom variant="body2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Soluta, facere voluptas id tenetur omnis doloremque nisi
									fugiat saepe reiciendis nobis ipsa magnam similique dicta
									eaque dolore aliquam, incidunt quam eos.
								</Typography>
								<CardActions sx={{ marginLeft: "auto" }}>
									<Button variant="contained" onClick={() => setOpen(true)}>
										Share
									</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				))}
				<Dialog open={open} onClose={() => setOpen(false)}>
					<DialogTitle>Are you sure?</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Are you sure to delete this product ?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)}>Cancel</Button>
					</DialogActions>
					<DialogActions>
						<Button>Delete</Button>
					</DialogActions>
				</Dialog>
			</Grid>
		</>
	);
};

export default Cards;
