import Image from "next/image";
import styles from "./page.module.css";
import Typo from "@/components/Typo";
import Form1 from "@/components/Form";
import Appbar from "@/components/AppBar";
import Cards from "@/components/Cards";
import Dilalog from "@/components/Dilalog";
import Links from "@/components/Links";
import Containers from "@/components/Containers";
import List1 from "@/components/List1";
import { Grid } from "@mui/material";

export default function Home() {
	return (
		<Grid container>
			{/* <Typo/> */}
			{/* <Form1/> */}
			<Appbar />
			<Cards />
			{/* <Dilalog /> */}
			{/* <Links /> */}
			{/* <Containers /> */}
			<List1 />
		</Grid>
	);
}
