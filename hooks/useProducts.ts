import useSWR, { SWRConfiguration } from "swr";

import { Product } from "../interfaces/Product";

export const useProducts = (endpoint: string, opts: SWRConfiguration = {}) => {
	const { data, error } = useSWR<Product[]>(`/api${endpoint}`, opts);

	return {
		products: data || [],
		isLoading: !error && !data,
		hasError: error,
	};
};
