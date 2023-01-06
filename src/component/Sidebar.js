import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import CartDrawer from "./CartDrawer";

import "../style/home.scss";
import SidebarMenu from "./SidebarMenu";

import { COLORS } from "../assets/color";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(98% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Sidebar = ({ pagetitle }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const [openDrawer, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const settings = ["Profile", "Account", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer anchor={"right"} open={openDrawer} onClose={handleDrawerClose}>
        <Box
          sx={{ width: 450 }}
          // onClick={handleDrawerClose}
          // onKeyDown={handleDrawerClose}
        >
          <CartDrawer />
        </Box>
      </Drawer>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ background: COLORS.primary, borderRadius: 20, margin: 10 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Typography
            // noWrap
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color={COLORS.white}
          >
            {pagetitle}
          </Typography>

          <IconButton
            color="inherit"
            onClick={!openDrawer ? handleDrawerOpen : handleDrawerClose}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <Box sx={{ paddingLeft: 2, flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                // onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar alt="Saad" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <SidebarMenu />
    </Box>
  );
};

export default Sidebar;
