import { NextPage } from "next";
import { Typography, Divider } from "@mui/material";

import { MainLayout, ProductList, Loader } from "../../components/";
import { useProducts } from "../../hooks/";

const WomenPage: NextPage = () => {
	const { products, isLoading } = useProducts("/products?gender=women");

	return (
		<MainLayout title={"Shop - Womens"} description={"The best clothes at best price for womens"}>
			<Typography variant="h1" component="h1">
				Womens
			</Typography>

			<Typography variant="h2" sx={{ mb: 1 }}>
				All Products
			</Typography>

			<Divider sx={{ mb: 2, color: "#e9e9e9" }} />
			{isLoading ? <Loader /> : <ProductList products={products} />}
		</MainLayout>
	);
};

export default WomenPage;
