import NextLink from "next/link";

import { Link, Box, Card, CardContent, Divider, Grid, Typography, Chip } from "@mui/material";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import CreditCardOffOutlinedIcon from "@mui/icons-material/CreditCardOffOutlined";

import { MainLayout } from "../../components/";
import { CartList, OrderSummary } from "../../components/";

const OrderPage = () => {
	return (
		<MainLayout title="Shop - Order #Number">
			<Typography variant="h1" component="h1">
				Order: #Number
			</Typography>

			<Chip sx={{ my: 2 }} label="This order is paid" variant="outlined" color="success" icon={<CreditScoreOutlinedIcon />} />

			<Grid container>
				<Grid item xs={12} sm={7}>
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className="summaryCard">
						<CardContent>
							<Typography variant="h2">Summary</Typography>
							<Divider sx={{ my: 1 }} />

							<Box display="flex" justifyContent="space-between">
								<Typography variant="subtitle1">Delivery Address</Typography>
								<NextLink href="/checkout/address" passHref>
									<Link underline="always" sx={{ color: "#1e1e1e" }}>
										Editar
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
										Editar
									</Link>
								</NextLink>
							</Box>

							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								<Typography variant="h2">Pay</Typography>

								<Chip sx={{ my: 2 }} label="This order is paid" variant="outlined" color="success" icon={<CreditScoreOutlinedIcon />} />
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default OrderPage;
