export default function ShowcaseFeatures({
  features,
}: {
  features: Array<string>;
}) {
  return (
    <div>
      <div className=" font-[700]">Features</div>
      <div className="lg:flex lg:flex-col lg:gap-2">
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
