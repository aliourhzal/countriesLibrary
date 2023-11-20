'use client';

import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

import usefetchAllCountries from '@/utils/fetchAllCountries';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';


function BorderCountry({ country }: any) {
	country = country.toLowerCase();

	return (
		<Link
			href={`${country}`}
			className="bg-light-element dark:bg-dark-element py-[5px] px-[15px] capitalize rounded-sm shadow-md shadow-[#0000001c]\"
		>
			{country}
		</Link>
	);
}

function CountryProperties({ country }: any) {
	return (
		<div className="w-full md:grid md:grid-cols-2 md:grid-rows-5 md:grid-flow-col gap-y-[5px]">
			<p>
				<span className="capitalize font-bold">native name: </span>
				{country.name.nativeName}
			</p>
			<p>
				<span className="capitalize font-bold">population: </span>
				{country.population}
			</p>
			<p>
				<span className="capitalize font-bold">region: </span>
				{country.region}
			</p>
			<p>
				<span className="capitalize font-bold">sub region: </span>
				{country.subregion}
			</p>
			<p>
				<span className="capitalize font-bold">capital: </span>
				{country.capital[0]}
			</p>
			<p>
				<span className="capitalize font-bold">top level domain: </span>
				{country.tld[0]}
			</p>
			<p>
				<span className="capitalize font-bold">currency: </span>
				{country.currencies}
			</p>
			<p>
				<span className="capitalize font-bold">language: </span>
				{country.languages}
			</p>
		</div>
	);
}

export default function Country(props: any) {
	let [country, loading, error] = usefetchAllCountries(`https://restcountries.com/v3.1/alpha/${props.params.code}`, false);

	if (!error && !loading) {
		if (typeof country.name.nativeName === 'object') {
			const nameKeys = Object.keys(country.name.nativeName);
			const currKeys = Object.keys(country.currencies);
			const langKeys = Object.keys(country.languages);
			country.name.nativeName = country.name.nativeName[nameKeys[0]].common;
			country.currencies = country.currencies[currKeys[0]].name;
			country.languages = country.languages[langKeys[0]];
			country.population = country.population.toLocaleString('en-US');
		}
	}

	return (
		<ChakraProvider>
			{!error && !loading &&
				<main className="px-[4%] py-[7vh]">
					<Link
						href={'/'}
						className="text-dark-text dark:text-light-element flex items-center gap-2 bg-light-element dark:bg-dark-element py-[7px] px-[25px] rounded-md mb-[7vh] w-fit shadow-md shadow-[#0000001c]"
					>
						<FaArrowLeftLong />
						<span>Back</span>
					</Link>
					<div className=" flex md:items-center flex-col md:flex-row md:justify-between gap-8 md:gap-0 text-dark-text dark:text-light-element">
						<img
							src={country.flags.png}
							className="w-full md:w-[40%] h-[auto]"
						/>
						<div className="w-[100%] md:w-[50%]">
							<h1 className=" font-extrabold text-3xl mb-[25px]">
								{country.name.common}
							</h1>
							<CountryProperties country={country} />
							{country.borders && (
								<div className="mt-[60px] flex flex-col md:flex-row gap-3 md:items-center">
									<span className="capitalize font-bold">
										Border Countries:{' '}
									</span>
									<div className="flex gap-3 flex-wrap">
										{country.borders.map((b: string, i: number) => {
											return <BorderCountry key={i} country={b} />;
										})}
									</div>
								</div>
							)}
						</div>
					</div>
				</main>
			}
			{
				loading && <Spinner
				thickness='6px'
				speed='0.65s'
				emptyColor='gray.500'
				color='white'
				boxShadow='inner'
				size='xl'
				className='absolute top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]'
			  />
			}
		</ChakraProvider>
	);
}
