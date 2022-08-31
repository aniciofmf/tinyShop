import useSWR, { SWRConfiguration } from "swr";

import { Product } from "../interfaces/Product";

const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export const useProducts = (endpoint: string, opts: SWRConfiguration = {}) => {
	const { data, error } = useSWR<Product[]>(`/api${endpoint}`, opts);

	return {
		products: data || [],
		isLoading: !error && !data,
		hasError: error,
	};
};
