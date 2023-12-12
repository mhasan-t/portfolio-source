import fonts from "@/app/fonts";

export default function TitleComponent() {
	return (
		<div
			className={
				" text-text_primary text-center font-bold text-4xl lg:text-5xl justify-center items-center  " +
				fonts.header.className
			}
		>
			PROJECT SHOWCASE
		</div>
	);
}
