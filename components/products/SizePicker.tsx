import { FC } from "react";
import { Size } from "../../interfaces/Product";
import { Box, Button } from "@mui/material";

export const SizePicker: FC<{ selectedSize?: Size; sizes: Size[] }> = ({ selectedSize, sizes }) => {
	return (
		<Box>
			{sizes.map((size) => (
				<Button key={size} size="small" variant="contained" color={selectedSize === size ? "secondary" : "info"}>
					{size}
				</Button>
			))}
		</Box>
	);
};
