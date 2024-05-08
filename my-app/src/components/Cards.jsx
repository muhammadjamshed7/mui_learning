"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
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
	{
		userId: "Sultan",
		id: 5,
		title: " quas odio",
		body: "https://images.unsplash.com/photo-1714906472874-63482f7cef44?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		userId: "Minhal",
		id: 6,
		title: " quas odio",
		body: "https://images.unsplash.com/photo-1714906472874-63482f7cef44?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const Cards = () => {
	return (
		<>
			<Grid container>
				{data.map((item, val) => (
					<Grid
						item
						md={3}
						lg={4}
						sm={12}
						key={val}
						display="flex"
						justifyContent="center"
					>
						<Card
							elevation={12}
							sx={{
								maxWidth: 345,
								height: 500,
								marginTop: "100px",
								padding: "10px",
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
									<Button variant="contained">Share</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Cards;
