import { NextPage } from "next";
import { Box, CircularProgress, Typography } from "@mui/material";

export const Loader: NextPage = () => {
	return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="calc(100vh- 200px)">
			<Typography variant="h1" component="h1" fontSize={30} fontWeight={400} sx={{ mt: 20, mb: 2 }}>
				Loading ...
			</Typography>
			<CircularProgress thickness={2} />
		</Box>
	);
};

export default Loader;
