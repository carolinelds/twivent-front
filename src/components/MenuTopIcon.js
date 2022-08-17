import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

export default function MenuTopIcon() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate();

  const TOKEN = localStorage.getItem("TOKEN");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  function logout(){
    localStorage.clear();
    navigate("/");
    return;
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {TOKEN === null ? (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Homepage"} />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <div className="list-container">
              <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Homepage"} />
              </ListItemButton>

              <ListItemButton onClick={() => navigate("/newevent")}>
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary={"Criar evento"} />
              </ListItemButton>

              <ListItemButton onClick={() => navigate("/myevents")}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={"Meus eventos"} />
              </ListItemButton>
            </div>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        {TOKEN === null ? (
          <ListItem disablePadding>
            <div className="list-container">
              <ListItemButton onClick={() => navigate("/signin")}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>

              <ListItemButton onClick={() => navigate("/signup")}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary={"Criar conta"} />
              </ListItemButton>
            </div>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => logout()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon sx={{ color: "#2E424D" }} fontSize="large" />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
