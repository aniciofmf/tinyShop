import NextLink from "next/link";
import { NextPage } from "next";
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material";

import { MainLayout } from "../../components/";
import { CartList, OrderSummary } from "../../components/";

const SummaryPage: NextPage = () => {
	return (
		<MainLayout title="Shop - Order Summary">
			<Typography variant="h1" component="h1">
				Order Summary
			</Typography>
			<Divider sx={{ my: 1 }} />
			<Grid container mt={3}>
				<Grid item xs={12} sm={6}>
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5} ml={7}>
					<Card className="summaryCard">
						<CardContent>
							<Typography variant="h2">Summary</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display="flex" justifyContent="space-between">
								<Typography variant="subtitle1">Delivery Address</Typography>

								<NextLink href="/checkout/address" passHref>
									<Link underline="always" sx={{ color: "#1e1e1e" }}>
										Edit
									</Link>
								</NextLink>
							</Box>

							<Typography>Name</Typography>
							<Typography>Address, ZIP</Typography>
							<Typography>City</Typography>
							<Typography>Country</Typography>
							<Typography>Phone</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display="flex" justifyContent="end">
								<NextLink href="/cart" passHref>
									<Link underline="always" sx={{ color: "#1e1e1e" }}>
										Edit
									</Link>
								</NextLink>
							</Box>

							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								<Button color="secondary" className="customBtn" fullWidth>
									Place the Order
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default SummaryPage;
