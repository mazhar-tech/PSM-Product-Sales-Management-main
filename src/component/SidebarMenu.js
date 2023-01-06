import React, { useState } from "react";
import { styled, useTheme, makeStyles } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Logo1 from "../assets/images/Logo png@2x.png";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import "../style/home.scss";
import { COLORS } from "../assets/color";
import { Lock } from "@mui/icons-material";
import { route } from "../routes";
import { IconButton } from "@mui/material";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const SidebarMenu = () => {
  const [open, setOpen] = useState(true);
  const [handleOpen, setHandleOpen] = useState(true);

  const handleClick = () => {
    setHandleOpen(!handleOpen);
  };
  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="drawer_header">
          <img src={Logo1} alt="logo" className="logo_image" />
          {/* <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton> */}
        </DrawerHeader>
        <Divider style={{ background: COLORS.secondary }} />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Link
            to={route.products}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton color="red">
              <ListItemIcon>
                <DashboardIcon style={{ color: COLORS.primary }} />
              </ListItemIcon>
              <ListItemText primary="Products" style={{ color: "black" }} />
            </ListItemButton>
          </Link>

          <Link
            to={route.order}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <NoteAltIcon style={{ color: COLORS.primary }} />
              </ListItemIcon>
              <ListItemText primary="Order" style={{ color: "black" }} />
            </ListItemButton>
          </Link>
          <Link
            to={route.customers}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon style={{ color: COLORS.primary }} />
              </ListItemIcon>
              <ListItemText primary="Customers" style={{ color: "black" }} />
            </ListItemButton>
          </Link>
          <Link
            to={route.Main}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Lock style={{ color: COLORS.primary }} />
              </ListItemIcon>
              <ListItemText primary="Logout" style={{ color: "black" }} />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default SidebarMenu;
