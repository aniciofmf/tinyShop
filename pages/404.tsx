import { NextPage } from "next";

import { Box, Typography } from "@mui/material";
import { MainLayout } from "../components/";

export const Page404: NextPage = () => {
	return (
		<MainLayout title="Shop - 404">
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="calc(100vh- 200px)"
				sx={{ marginTop: 20, flexDirection: { xs: "column", sm: "row" } }}
			>
				<Typography variant="h1" component="h1" fontSize={60} fontWeight={100}>
					404 |
				</Typography>
				<Typography marginLeft={2} marginTop={1} fontSize={25}>
					Page Not Found
				</Typography>
			</Box>
		</MainLayout>
	);
};

export default Page404;
