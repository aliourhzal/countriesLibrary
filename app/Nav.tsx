'use client'

import { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';

export default function Nav() {
	const [darkMode, setDarkMode] = useState(false);
	const changeMode = () => {
		setDarkMode(state => {
			if (!state)
				document.querySelector('html')?.classList.add('dark');
			else
				document.querySelector('html')?.classList.remove('dark');
			return (!state);
		});
	}

	return (
		<div className="w-full px-[4%] py-[20px] flex justify-between bg-light-element dark:bg-dark-element shadow-md shadow-[#0000001c]">
			<h1 className=" text-2xl font-extrabold text-dark-text dark:text-light-element">
				Where in the world?
			</h1>
			<button className="flex items-center gap-2 text-dark-text dark:text-light-element" onClick={changeMode}>
				{
					darkMode ? <FaMoon /> : <FaRegMoon />
				}
				<span className="font-semibold text-dark-text dark:text-light-element">Dark Mode</span>
			</button>
		</div>
	);
}
