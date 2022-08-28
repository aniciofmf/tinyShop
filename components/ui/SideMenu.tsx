import { FC } from "react";
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	Input,
	InputAdornment,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const SideMenu: FC = () => {
	return (
		<Drawer open={false} sx={{ backdropFilter: "blur(2px)", transition: "all 0.5s ease-out" }}>
			<Box sx={{ width: 250, paddingTop: 5 }}>
				<List>
					<ListItem>
						<Input
							type="text"
							placeholder="Search..."
							endAdornment={
								<InputAdornment position="end">
									<IconButton aria-label="toggle password visibility">
										<SearchOutlinedIcon />
									</IconButton>
								</InputAdornment>
							}
						/>
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<AccountCircleOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Profile"} />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<ListAltOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"My Orders"} />
					</ListItem>

					<ListItem button sx={{ display: { xs: "", sm: "none" } }}>
						<ListItemIcon>
							<MaleOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Mens"} />
					</ListItem>

					<ListItem button sx={{ display: { xs: "", sm: "none" } }}>
						<ListItemIcon>
							<FemaleOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Womans"} />
					</ListItem>

					<ListItem button sx={{ display: { xs: "", sm: "none" } }}>
						<ListItemIcon>
							<EscalatorWarningOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Kids"} />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<LockOpenOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Login"} />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<LogoutOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Logout"} />
					</ListItem>

					{/* Admin */}
					<Divider />
					<ListSubheader>Admin Panel</ListSubheader>

					<ListItem button>
						<ListItemIcon>
							<CategoryOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Products"} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ListAltOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Orders"} />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<GroupsOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary={"Users"} />
					</ListItem>
				</List>
			</Box>

			<Divider></Divider>
		</Drawer>
	);
};
