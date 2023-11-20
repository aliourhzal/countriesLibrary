
import Card from "@/components/Card";

export default function Countries(props: any) {
	return (
		<div className="w-full flex items-center flex-col md:flex-row flex-wrap gap-x-[20px] gap-y-[30px] md:justify-between">
			{
				props.countries.map((c:any, i: any) => {
					return (
						<Card country={c} key={i}/>
					);
				})
			}
		</div>
	);
}