import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";

import { Product } from "../../interfaces/Product";

export const ProductCard: FC<{ product: Product }> = ({ product }) => {
	const [hover, setHover] = useState(false);
	const [imgLoaded, setImgLoaded] = useState(false);

	const productImage = useMemo(() => {
		return hover ? `/products/${product.images[1]}` : `/products/${product.images[0]}`;
	}, [hover, product.images]);

	return (
		<Grid item xs={6} sm={4} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<Card>
				<NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
					<Link>
						<CardActionArea>
							<CardMedia component="img" className="fadeIn" image={productImage} alt={product.title} onLoad={() => setImgLoaded(true)} />
						</CardActionArea>
					</Link>
				</NextLink>
			</Card>

			<Box
				sx={{ display: imgLoaded ? "block" : "none", textAlign: "center", backgroundColor: "#f2f2f2", padding: "5px 10px" }}
				className="fadeIn"
			>
				<Typography fontWeight={500}>{product.title}</Typography>
				<Typography fontWeight={400}>{`$${product.price}`}</Typography>
			</Box>
		</Grid>
	);
};
