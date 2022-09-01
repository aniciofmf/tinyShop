import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { lightTheme } from "../themes/light";
import { UIProvider } from "../context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
			}}
		>
			<UIProvider>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</SWRConfig>
	);
}

export default MyApp;
