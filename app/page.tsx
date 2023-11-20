'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

import Search from './Search';
import Filter from './Filter';
import Countries from './Countries';
import usefetchAllCountries from '@/utils/fetchAllCountries';
import { ChakraProvider, Spinner } from '@chakra-ui/react';

export default function Home() {
	const [data, loading, error] = usefetchAllCountries('https://restcountries.com/v3.1/all', true);
	const [filteredData, setFilteredData] = useState<any[]>(data);

	const filterByRegion = (region: string) => {
		if (region === 'All')
			setFilteredData(data);
		else
			setFilteredData(data.filter((c: any) => c.region === region));
	}

	const searchCountry = (keyWord: string) => {
		keyWord = keyWord.toLowerCase();
		// console.log(keyWord);
		setFilteredData(data.filter((c: any) => c.name.common.toLowerCase().substring(0, keyWord.length) === keyWord));
	}

	
	useEffect(() => {
		if (!loading && !error)
			setFilteredData(data);
	}, [data, loading, error])

	return (
		<ChakraProvider>
			<main className='px-[4%] py-[35px]'>
				<div className='flex sm:items-center sm:justify-between mb-[40px] flex-col sm:flex-row gap-6'>
					<Search search={searchCountry}/>
					<Filter filter={filterByRegion}/>
				</div>
				{
					!loading && filteredData.length > 0 && <Countries countries={filteredData}/>
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
			</main>
		</ChakraProvider>
	)
}
