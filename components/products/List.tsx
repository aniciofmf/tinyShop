import { FC } from "react";
import { Grid } from "@mui/material";
import { Product } from "../../interfaces/Product";
import { ProductCard } from "./Card";

export const ProductList: FC<{ products: Product[] }> = ({ products }) => {
	return (
		<Grid container spacing={4}>
			{products.map((product) => (
				<ProductCard key={product.slug} product={product} />
			))}
		</Grid>
	);
};
