import NextLink from "next/link";
import { NextPage } from "next";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthorizationLayout } from "../../components";

const RegisterPage: NextPage = () => {
	return (
		<AuthorizationLayout title={"Ingresar"}>
			<Box sx={{ width: 350, padding: "10px 20px" }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h1" component="h1">
							Register
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<TextField label="Full Name" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Email" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Password" type="password" fullWidth />
					</Grid>

					<Grid item xs={12}>
						<Button color="secondary" className="customBtn" size="large" fullWidth>
							Register
						</Button>
					</Grid>

					<Grid item xs={12} display="flex" justifyContent="end">
						<NextLink href="/auth/login" passHref>
							<Link underline="always" sx={{ color: "#1e1e1e" }}>
								Login
							</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthorizationLayout>
	);
};

export default RegisterPage;
