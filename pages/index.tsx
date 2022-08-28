import { NextPage } from "next";
import { Typography, Divider } from "@mui/material";
import { MainLayout } from "../components/layouts/MainLayout";
import { ProductList } from "../components/products/List";
import { seedData } from "../db/products";

const HomePage: NextPage = () => {
	return (
		<MainLayout title={"Shop - Home"} description={"The best clothes at best price"}>
			<Typography variant="h1" component="h1">
				Shop
			</Typography>

			<Typography variant="h2" sx={{ mb: 1 }}>
				All Products
			</Typography>

			<Divider sx={{ mb: 2, color: "#e9e9e9" }} />

			<ProductList products={seedData.products} />
		</MainLayout>
	);
};

export default HomePage;
