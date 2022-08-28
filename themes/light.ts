import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "##1e1e1e",
		},
		secondary: {
			main: "#7B788E",
			contrastText: "#fff !important",
		},
		info: {
			main: "#ffffff",
		},
	},
	components: {
		MuiLink: {
			defaultProps: {
				underline: "none",
			},
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
				position: "fixed",
			},
			styleOverrides: {
				root: {
					backgroundColor: "#f1f1f1",
					height: 60,
				},
			},
		},

		MuiTypography: {
			styleOverrides: {
				h1: {
					fontSize: 30,
					fontWeight: 600,
				},
				h2: {
					fontSize: 20,
					fontWeight: 400,
				},
				subtitle1: {
					fontSize: 18,
					fontWeight: 600,
				},
			},
		},

		MuiButton: {
			defaultProps: {
				variant: "outlined",
				size: "medium",
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: "none",
					boxShadow: "none",
					color: "#1e1e1e",
					borderRadius: 5,
					":hover": {
						backgroundColor: "rgba(0,0,0,0.08)",
						transition: "all 0.3s ease-in-out",
						border: "1px solid #848997",
					},
				},
			},
		},

		MuiChip: {
			defaultProps: {
				variant: "outlined",
				size: "medium",
			},
			styleOverrides: {
				root: {
					borderRadius: 5,
				},
			},
		},

		MuiCard: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					boxShadow: "0px 5px 5px rgba(0,0,0,0.05)",
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					backgroundColor: "rgba(183, 175, 175, 0.1)",
				},
			},
		},
	},
});
