import { NextPage } from "next";
import { useRouter } from "next/router";
import { Chip, Grid, Box, Typography, Button } from "@mui/material";

import { seedData } from "../../db/products";
import { MainLayout, SizePicker, SlideShow, QuantityCounter } from "../../components";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../../components/ui/Loader";
import { Product } from "../../interfaces/";

const product = seedData.products[0];

export const ProductPage: NextPage = () => {
	/*	const router = useRouter();
	const { slug } = router.query;
	const { products: product, isLoading } = useProducts<Product>(`/products/${slug}`);*/

	return (
		<MainLayout title={product.title} description={product.description}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={7}>
					<SlideShow images={product.images} />
				</Grid>

				<Grid item xs={12} sm={5}>
					<Box display="flex" flexDirection="column">
						<Typography variant="h1" component="h1">
							{product.title}
						</Typography>
						<Typography variant="subtitle1" component="h2">
							${product.price}
						</Typography>
						<Box sx={{ my: 2 }}>
							<Typography variant="subtitle1" component="h2">
								Quantity
								<QuantityCounter />
								<SizePicker selectedSize={product.sizes[0]} sizes={product.sizes} />
							</Typography>
						</Box>
						<Button color="secondary" className="customBtn">
							Add To Cart
						</Button>

						{/*<Chip label="No Stock Available" color="error" variant="outlined" />*/}

						<Box sx={{ mt: 3 }}>
							<Typography variant="subtitle2" component="h2">
								Description
							</Typography>
							<Typography variant="body2">{product.description}</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default ProductPage;
