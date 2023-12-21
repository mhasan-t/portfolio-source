import React from "react";
import { motion } from "framer-motion";
import TitleComponent from "../commons/TitleComponent";

export default function index() {
	return (
		<motion.div className="flex flex-col justify-center items-center bg-primary pb-20 ">
			<TitleComponent titleText="I WORKED ON" />
		</motion.div>
	);
}
