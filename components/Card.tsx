import { useRouter } from 'next/navigation';

export default function Card(props: any) {
	const router = useRouter();
	// console.log(props.country);
	return (
		<div
			className="h-[350px] w-[100%] max-w-[300px] bg-light-element dark:bg-dark-element rounded-md overflow-hidden cursor-pointer shadow-md shadow-[#0000001c]"
			onClick={() => router.push(`${props.country.cca2}`)}
		>
			<img src={props.country.flags.png} className="h-[50%] w-[100%]" />
			<div className="pt-[20px] pl-[22px] text-dark-text dark:text-light-element">
				<h2 className="mb-[12px] font-extrabold">
					{props.country.name.common}
				</h2>
				<div className="flex flex-col gap-[6px]">
					<div className="text-sm">
						<span className="capitalize font-semibold">population: </span>
						{props.country.population}
					</div>
					<div className="text-sm">
						<span className="capitalize font-semibold">region: </span>
						{props.country.region}
					</div>
					<div className="text-sm">
						<span className="capitalize font-semibold">capital: </span>
						{props.country.capital}
					</div>
				</div>
			</div>
		</div>
	);
}
