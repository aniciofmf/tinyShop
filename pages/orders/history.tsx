import NextLink from "next/link";

import { Typography, Grid, Chip, Link } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { MainLayout } from "../../components/";

const columns: GridColDef[] = [
	{ field: "id", headerName: "Order ID", width: 100, filterable: false, sortable: true },
	{ field: "fullname", headerName: "Full Name", width: 300, filterable: false, sortable: true },

	{
		field: "status",
		headerName: "Status",
		description: "Show if an order is paid or not",
		width: 200,
		filterable: false,
		sortable: true,
		renderCell: (params: GridValueGetterParams) => {
			return params.row.status ? (
				<Chip color="success" label="Paid" variant="outlined" />
			) : (
				<Chip color="error" label="Not Paid" variant="outlined" />
			);
		},
	},
	{
		field: "order",
		headerName: "View Order",
		width: 200,
		filterable: false,
		sortable: false,
		renderCell: (params: GridValueGetterParams) => {
			return (
				<NextLink href={`/orders/${params.row.id}`} passHref>
					<Link underline="always" sx={{ color: "#1e1e1e" }}>
						View Order
					</Link>
				</NextLink>
			);
		},
	},
];

const rows = [
	{ id: 1, status: true, fullname: "Brian Benders" },
	{ id: 2, status: false, fullname: "John Doe" },
	{ id: 3, status: true, fullname: "Jane Doe" },
	{ id: 4, status: false, fullname: "Robert Richardson" },
	{ id: 5, status: false, fullname: "Emily Roberts" },
	{ id: 6, status: true, fullname: "Susan Negroponte" },
];

const HistoryPage = () => {
	return (
		<MainLayout title="Shop - Orders History">
			<Typography variant="h1" component="h1">
				Orders History
			</Typography>

			<Grid container sx={{ mt: 2 }}>
				<Grid item xs={12} sx={{ height: 500, width: "100%" }}>
					<DataGrid disableSelectionOnClick rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default HistoryPage;
