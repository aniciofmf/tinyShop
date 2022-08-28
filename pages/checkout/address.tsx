import { NextPage } from "next";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

import { MainLayout } from "../../components";
import { Box } from "@mui/system";

const AddressPage: NextPage = () => {
	return (
		<MainLayout title="Shop - Address">
			<Typography variant="h1" component="h1">
				Address
			</Typography>
			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} sm={6}>
					<TextField label="First Name" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label="Last Name" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label="Address" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label="Zip" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<Select variant="filled" label="Country" value={0}>
							<MenuItem value={0}>Country</MenuItem>
							<MenuItem value={1}>Country 1</MenuItem>
							<MenuItem value={2}>Country 2</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label="City" variant="filled" fullWidth />
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label="Phone" variant="filled" fullWidth />
				</Grid>
			</Grid>

			<Box sx={{ mt: 5 }} display="flex" justifyContent="center">
				<Button sx={{ color: "#7B788E" }} className="customBtn" size="large">
					Review Order
				</Button>
			</Box>
		</MainLayout>
	);
};

export default AddressPage;
