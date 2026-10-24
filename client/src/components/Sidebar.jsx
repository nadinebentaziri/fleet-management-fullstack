import React  from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  PublicOutlined,
  AddAlertOutlined,
} from "@mui/icons-material";
import logo from "../assets/logo2.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import getUserRole from "service/getUserRole";
import PersonSearchSharpIcon from '@mui/icons-material/PersonSearchSharp';
import ChatIcon from '@mui/icons-material/Chat';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
const navItems = [
  {
    text: "Intercom Dashboard",
    icon: <LeaderboardRoundedIcon />,
    path: "dashboard"
  },

  {
    text: "Liste des Chargés  D'affaires",
    icon: <Groups2Outlined />,
    path: 'chiefs'
  },
  {
    text: "Affectation",
    icon: <PersonSearchSharpIcon />,
    path: 'affectations'
  },
  {
    text: "Réclamation",
    icon: <ChatIcon />,
    path: 'reclamation'
  },
  {
    text: "Alert",
    icon: <AddAlertOutlined />,
    path: 'alert'
  },
  {
    text: "À propos de nous",
    icon: <PublicOutlined />,
    path: "contact"
  }
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  token
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    console.log(getUserRole(token))

  }, [])
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);



  return (

    <Box component="nav">
      {isSidebarOpen && 
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
         
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                  <div>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100px", height: "40px" }}
            />
          </div>

                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.filter(({ text }) => {
                console.log(getUserRole(token))
                if (getUserRole(token) === "user") {
                  return ["À propos de nous", "Réclamation", "Intercom Dashboard", "Alert"].includes(text);
                }
                else  {
                  return true
                }
                return false
              }).map(({ text, icon, path }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate({ pathname: `${path}` });
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? "#A3A0B3" : "transparent",
                        color:
                          active === lcText
                            ? "white"
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? "white"
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      }
    </Box>
  );
};

export default Sidebar;
