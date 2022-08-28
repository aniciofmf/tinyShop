import { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

export const QuantityCounter: FC = () => {
	return (
		<Box display="flex" alignItems="center">
			<IconButton>
				<RemoveCircleOutlineOutlinedIcon />
			</IconButton>
			<Typography sx={{ width: 40, textAlign: "center" }}> 1</Typography>
			<IconButton>
				<AddCircleOutlineOutlinedIcon />
			</IconButton>
		</Box>
	);
};
