export default function ShowcaseFeatures({
	features,
}: {
	features: Array<string>;
}) {
	return (
		<div>
			<div>Features</div>
			<div>
				<div className=" list-disc list-inside ">
					{features.map((feature) => {
						return (
							<li key={feature} className=" text-sm m-0 p-0 ">
								{feature}
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
}
