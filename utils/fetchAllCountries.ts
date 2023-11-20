import axios from "axios";
import { useEffect, useState } from "react";

export default function usefetchAllCountries(url: string, all: boolean): any[] {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios.get(url)
		.then(res => {
			all ? setData(res.data) : setData(res.data[0])
		})
		.catch(err => setError(true))
		.finally(() => setLoading(false));
	}, [])

	return ([data, loading, error]);

}