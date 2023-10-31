import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./Navbar.css";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            DATALYSIS
          </Typography>
          <Link className="link" to="/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
