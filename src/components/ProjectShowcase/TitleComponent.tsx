import fonts from "@/app/fonts";

export default function TitleComponent() {
	return (
		<div
			className={
				" text-text_primary text-center text-2xl lg:text-5xl justify-center items-center  " +
				fonts.header.className
			}
		>
			PROJECT SHOWCASE
		</div>
	);
}
