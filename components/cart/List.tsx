import { FC } from "react";
import NextLink from "next/link";
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";

import { seedData } from "../../db/products";
import { QuantityCounter } from "../ui/QuantityCounter";

const productsCart = [seedData.products[0], seedData.products[1], seedData.products[2]];

export const CartList: FC<{ editable?: boolean }> = ({ editable = false }) => {
	return (
		<>
			{productsCart.map((product) => (
				<Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
					<Grid item xs={3}>
						<NextLink href="/product/slug" passHref>
							<Link>
								<CardActionArea>
									<CardMedia image={`/products/${product.images[0]}`} component="img" sx={{ borderRadius: "5px" }} />
								</CardActionArea>
							</Link>
						</NextLink>
					</Grid>
					<Grid item xs={7}>
						<Box display="flex" flexDirection="column">
							<Typography variant="body1">{product.title}</Typography>
							<Typography variant="body2">
								Size: <strong>M</strong>
							</Typography>

							{editable ? (
								<QuantityCounter />
							) : (
								<Typography variant="body2">
									<strong>3 Items</strong>
								</Typography>
							)}
						</Box>
					</Grid>
					<Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
						<Typography variant="subtitle1">{`$${product.price}`}</Typography>

						{editable && (
							<Button variant="text" color="secondary">
								Remove
							</Button>
						)}
					</Grid>
				</Grid>
			))}
		</>
	);
};
