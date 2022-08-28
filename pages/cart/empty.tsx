import { NextPage } from "next";
import NextLink from "next/link";
import { Box, Typography, Link } from "@mui/material";
import RemoveShoppingCartOutlined from "@mui/icons-material/RemoveShoppingCartOutlined";

import { MainLayout } from "../../components";

const EmptyPage: NextPage = () => {
	return (
		<MainLayout title="Shop - Cart Empty">
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="calc(100vh- 200px)"
				sx={{ marginTop: 20, flexDirection: { xs: "column", sm: "row" } }}
			>
				<RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
				<Box marginTop={2} display="flex" flexDirection="column" alignItems="center">
					<Typography variant="h1">Your cart is empty</Typography>
					<NextLink href="/" passHref>
						<Link typography="h5" color="secondary">
							Back Home
						</Link>
					</NextLink>
				</Box>
			</Box>
		</MainLayout>
	);
};

export default EmptyPage;
