import { FC, ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "../ui/Navbar";
import { SideMenu } from "../ui/SideMenu";

interface LayoutProps {
	title: string;
	description?: string;
	imageUrl?: string;
}

export const MainLayout: FC<{ children: ReactNode } & LayoutProps> = ({ children, title, description, imageUrl }) => {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name="description" content={description} />

				<meta name="og:title" content={title} />
				<meta name="og:description" content={description} />

				{imageUrl && <meta name="og:image" content={imageUrl} />}
			</Head>

			<nav>
				<Navbar />
			</nav>

			<SideMenu />

			<main style={{ margin: "80px auto", padding: "0px 30px", maxWidth: "1440px" }}>{children}</main>

			<footer></footer>
		</>
	);
};
