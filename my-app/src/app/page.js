import Image from "next/image";
import styles from "./page.module.css";
import Typo from "@/components/Typo";
import Form1 from "@/components/Form";
import Appbar from "@/components/AppBar";
import Cards from "@/components/Cards";
export default function Home() {
	return (
		<main>
			{/* <Typo/> */}
			{/* <Form1/> */}
			<Appbar />
			<Cards />
		</main>
	);
}
