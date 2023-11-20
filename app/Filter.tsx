import { MouseEventHandler, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Filter(props: any) {
	const [displayList, setDisplayList] = useState<boolean>(false);

	const drowDown = (e: any) => {
		setDisplayList((state) => !state);
	};

	const selectRegion = (e: any) => {
		const { region } = e.target.dataset;
		props.filter(region);
	};

	return (
		<div
			className="relative px-[20px] py-[15px] flex items-center justify-between bg-light-element dark:bg-dark-element text-dark-text dark:text-light-element text-sm shadow-md shadow-[#0000001c] rounded-[5px] w-[175px] cursor-pointer"
			onClick={drowDown}
		>
			<span>Filter by Region</span>
			<IoIosArrowDown
				className={`${displayList && 'rotate-180'} transition-all`}
			/>
			{displayList && (
				<ul className="absolute bg-light-element dark:bg-dark-element w-full px-[20px] py-[15px] top-[110%] left-0 flex flex-col gap-[7px] rounded-[5px] ">
					<li
						className="cursor-pointer"
						onClick={selectRegion}
						data-region="All"
					>
						All
					</li>
					<li
						className="cursor-pointer"
						onClick={selectRegion}
						data-region="Africa"
					>
						Africa
					</li>
					<li
						className="cursor-pointer"
						onClick={selectRegion}
						data-region="Americas"
					>
						America
					</li>
					<li
						className="cursor-pointer"
						onClick={selectRegion}
						data-region="Asia"
					>
						Asia
					</li>
					<li
						className="cursor-pointer"
						onClick={selectRegion}
						data-region="Europe"
					>
						Europe
					</li>
					<li
						className="cursor-pointer"
						onClick={selectRegion}
						data-region="Oceania"
					>
						Oceania
					</li>
				</ul>
			)}
		</div>
	);
}
