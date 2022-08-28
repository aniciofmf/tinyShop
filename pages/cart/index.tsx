import { NextPage } from "next";
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";

import { MainLayout } from "../../components/";
import { CartList, OrderSummary } from "../../components/";

const CartPage: NextPage = () => {
	return (
		<MainLayout title="Shop - Cart">
			<Typography variant="h1" component="h1">
				Cart
			</Typography>
			<Divider sx={{ my: 1 }} />
			<Grid container mt={3}>
				<Grid item xs={12} sm={6}>
					<CartList editable />
				</Grid>
				<Grid item xs={12} sm={5} ml={7}>
					<Card className="summaryCard">
						<CardContent>
							<Typography variant="h2">Order</Typography>
							<Divider sx={{ my: 1 }} />

							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								<Button color="secondary" className="customBtn" fullWidth>
									Checkout
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default CartPage;
