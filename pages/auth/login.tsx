import NextLink from "next/link";
import { NextPage } from "next";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthorizationLayout } from "../../components";

const LoginPage: NextPage = () => {
	return (
		<AuthorizationLayout title="Login">
			<Box sx={{ width: 350, padding: "10px 20px" }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h1" component="h1" sx={{ ml: 3 }}>
							Welcome to the Shop
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<TextField label="Email" fullWidth />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Password" type="password" fullWidth />
					</Grid>

					<Grid item xs={12}>
						<Button color="secondary" className="customBtn" size="large" fullWidth>
							Login
						</Button>
					</Grid>

					<Grid item xs={12} display="flex" justifyContent="end">
						<NextLink href="/auth/register" passHref>
							<Link underline="always" sx={{ color: "#1e1e1e" }}>
								Register
							</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthorizationLayout>
	);
};

export default LoginPage;
