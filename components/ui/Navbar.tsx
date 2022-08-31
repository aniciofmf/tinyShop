import NextLink from "next/link";
import { useRouter } from "next/router";

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
	const router = useRouter();

	return (
		<AppBar>
			<Toolbar>
				<NextLink href="/" passHref>
					<Link display="flex" alignItems="center">
						<Button startIcon={<MenuOutlinedIcon />} sx={{ fontSize: "16px", color: "black" }}>
							Menu
						</Button>
					</Link>
				</NextLink>

				<Box flex={1} />

				<Box sx={{ display: { xs: "none", sm: "block" } }}>
					<NextLink href="/" passHref>
						<Link>
							<Button color={router.asPath == "/" ? "secondary" : "primary"}>All</Button>
						</Link>
					</NextLink>
					<NextLink href="/category/men" passHref>
						<Link>
							<Button color={router.asPath == "/category/men" ? "secondary" : "primary"}>Mens</Button>
						</Link>
					</NextLink>
					<NextLink href="/category/women" passHref>
						<Link>
							<Button color={router.asPath == "/category/women" ? "secondary" : "primary"}>Womens</Button>
						</Link>
					</NextLink>
					<NextLink href="/category/kid" passHref>
						<Link color="primary">
							<Button color={router.asPath == "/category/kid" ? "secondary" : "primary"}>Kids</Button>
						</Link>
					</NextLink>
				</Box>

				<Box flex={1} />

				<IconButton>
					<SearchOutlined />
				</IconButton>

				<NextLink href="/cart" passHref>
					<Link>
						<IconButton>
							<Badge color="secondary">
								<ShoppingCartOutlined />
							</Badge>
						</IconButton>
					</Link>
				</NextLink>
			</Toolbar>
		</AppBar>
	);
};
