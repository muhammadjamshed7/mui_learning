"use client";
import {
	TextField,
	Button,
	Typography,
	Box,
	FormGroup,
	FormControlLabel,
	Checkbox,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	RadioGroup,
	FormLabel,
	Radio,
} from "@mui/material";
import { useState } from "react";
const Form1 = () => {
	const [state, setstate] = useState({
		name: "",
		email: "",
		password: "",
		term: false,
		select: "",
		gender: "",
	});
	const handleChange = (e) => {
		setstate((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<>
			<Box
				sx={{
					background: "lightgray",
					height: 500,
					p: 5,
					textAlign: "center",
				}}
			>
				{" "}
				<form onSubmit={handleSubmit}>
					<TextField
						name="name"
						value={state.name}
						type="text"
						placeholder="Enter Name"
						variant="outlined"
						label="Name"
						onChange={handleChange}
						sx={{ margin: "20px" }}
					/>

					<TextField
						name="email"
						value={state.email}
						type="email"
						placeholder="Enter Email"
						variant="outlined"
						label="Email"
						onChange={handleChange}
						sx={{ margin: "20px" }}
					/>

					<TextField
						name="password"
						value={state.password}
						type="password"
						placeholder="Password"
						variant="outlined"
						label="Password"
						helperText="Some  Password"
						onChange={handleChange}
						sx={{ margin: "20px" }}
					/>
					<br />
					<FormGroup>
						<FormControlLabel
							label="I agree T & C"
							control={
								<Checkbox
									onChange={() => {
										setstate((pre) => ({
											...pre,
											term: !state.term,
										}));
									}}
								/>
							}
						></FormControlLabel>
					</FormGroup>

					<FormControl fullWidth>
						<InputLabel id="menu">Courses</InputLabel>
						<Select
							onChange={handleChange}
							name="select"
							value={state.name}
							label="courses"
						>
							<MenuItem value="mongodo">Mongodb</MenuItem>
							<MenuItem value="Sql">SQL</MenuItem>
							<MenuItem value="Laravel">laravel</MenuItem>
							<MenuItem value="python">python</MenuItem>
						</Select>
					</FormControl>
					<br />
					<FormControl>
						<FormLabel>Gender</FormLabel>
						<RadioGroup
							name="gender"
							defaultValue={"male"}
							onChange={handleChange}
						>
							<FormControlLabel
								value={"male"}
								label={"male"}
								control={<Radio />}
							/>
							<FormControlLabel
								value={"female"}
								label={"female"}
								control={<Radio />}
							/>
							<FormControlLabel
								value={"other"}
								label={"other"}
								control={<Radio />}
							/>
						</RadioGroup>
					</FormControl>
					<Button variant="contained" type="submit">
						Submit
					</Button>
				</form>
			</Box>
		</>
	);
};

export default Form1;
