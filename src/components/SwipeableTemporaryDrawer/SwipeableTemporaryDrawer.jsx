import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../../store/recoil_store";

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate();
  const [isTabActive, setIsTabActive] = useState({ movies: true });
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/movies"
              style={({ isActive, isPending }) => {
                return {
                  //   fontWeight: isActive ? "700" : "400",
                  textDecoration: "none",
                };
              }}
              onClick={() => {
                setIsTabActive({ movies: true });
                setIsPlaying(false);
              }}
            >
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className={
                    isTabActive?.movies ? "active-section-font" : "section-font"
                  }
                >
                  Movies
                </span>
                <span
                  className={
                    isTabActive?.movies ? "active-tab" : "inactive-tab"
                  }
                ></span>
              </span>
            </NavLink>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/tv-series"
              style={({ isActive, isPending }) => {
                return {
                  //   fontWeight: isActive ? "700" : "400",
                  textDecoration: "none",
                };
              }}
              onClick={() => {
                setIsTabActive({ tvSeries: true });
                // setIsPlaying(false);
              }}
            >
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className={
                    isTabActive?.tvSeries
                      ? "active-section-font"
                      : "section-font"
                  }
                >
                  TV Series
                </span>
                <span
                  className={
                    isTabActive?.tvSeries ? "active-tab" : "inactive-tab"
                  }
                ></span>
              </span>
            </NavLink>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/documentaries"
              style={({ isActive, isPending }) => {
                return {
                  //   fontWeight: isActive ? "700" : "400",
                  textDecoration: "none",
                };
              }}
              onClick={() => {
                setIsTabActive({ documentaries: true });
                // setIsPlaying(false);
              }}
            >
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className={
                    isTabActive?.documentaries
                      ? "active-section-font"
                      : "section-font"
                  }
                >
                  Documentaries
                </span>
                <span
                  className={
                    isTabActive?.documentaries ? "active-tab" : "inactive-tab"
                  }
                ></span>
              </span>
            </NavLink>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/categories"
              style={({ isActive, isPending }) => {
                return {
                  //   fontWeight: isActive ? "700" : "400",
                  textDecoration: "none",
                  //   color: isActive ? "red" : "black",
                };
              }}
              onClick={() => {
                setIsTabActive({ categories: true });
                // setIsPlaying(false);
              }}
            >
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className={
                    isTabActive?.categories
                      ? "active-section-font"
                      : "section-font"
                  }
                >
                  Categories
                </span>
                <span
                  className={
                    isTabActive?.categories ? "active-tab" : "inactive-tab"
                  }
                ></span>
              </span>
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
                fill="rgba(255,255,255,1)"
              ></path>
            </svg>
          </Button>
          <SwipeableDrawer
            // variant="temporary"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={{
              sx: {
                backgroundColor: "#1A1A1D",
                color: "white",
              },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
