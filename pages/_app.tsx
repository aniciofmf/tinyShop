import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "../themes/light";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
			}}
		>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</SWRConfig>
	);
}

export default MyApp;
