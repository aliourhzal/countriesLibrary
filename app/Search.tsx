import { IoSearch } from 'react-icons/io5';

export default function Search({ search }: any) {
	const searchCountry = (e: any) => {
		const { value } = e.target;
		search(value);
	};

	return (
		<div className="flex items-center bg-light-element dark:bg-dark-element px-[30px] py-[15px] gap-[20px] rounded-[5px] w-[100%] sm:w-[50%] shadow-md shadow-[#0000001c]">
			<IoSearch className="text-dark-text dark:text-light-element text-lg text-[20px]" />
			<form className="w-[100%]">
				<input
					type="text"
					placeholder="Search for a country..."
					className=" outline-none bg-transparent text-dark-text dark:text-light-element placeholder-dark-text dark:placeholder-light-element  text-sm w-[100%]"
					onChange={searchCountry}
				/>
			</form>
		</div>
	);
}
