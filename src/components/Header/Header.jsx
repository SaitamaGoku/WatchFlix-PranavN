import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../../store/recoil_store";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";
import { isTabActiveState } from "../../store/recoil_store";

function Header() {
  const navigate = useNavigate();
  const [isTabActive, setIsTabActive] = useRecoilState(isTabActiveState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  return (
    <header id="header">
      <div
        id="logo-header"
        onClick={() => {
          setIsTabActive({ movies: true });
          setIsPlaying(false);
          navigate("/");
        }}
      >
        Watch<span style={{ color: "#DA3714" }}>Flix</span>
      </div>
      <div id="sections">
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
              className={isTabActive?.movies ? "active-tab" : "inactive-tab"}
            ></span>
          </span>
        </NavLink>

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
                isTabActive?.tvSeries ? "active-section-font" : "section-font"
              }
            >
              TV Series
            </span>
            <span
              className={isTabActive?.tvSeries ? "active-tab" : "inactive-tab"}
            ></span>
          </span>
        </NavLink>

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
                isTabActive?.categories ? "active-section-font" : "section-font"
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
      </div>
      <div id="header-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          style={{ cursor: "pointer" }}
        >
          <path
            d="M11.4375 21C13.3788 20.9996 15.2643 20.3497 16.7936 19.1537L21.6017 23.9619L23.1483 22.4153L18.3401 17.6072C19.5367 16.0778 20.187 14.1919 20.1875 12.25C20.1875 7.42547 16.262 3.5 11.4375 3.5C6.61294 3.5 2.68747 7.42547 2.68747 12.25C2.68747 17.0745 6.61294 21 11.4375 21ZM11.4375 5.6875C15.0567 5.6875 18 8.63078 18 12.25C18 15.8692 15.0567 18.8125 11.4375 18.8125C7.81825 18.8125 4.87497 15.8692 4.87497 12.25C4.87497 8.63078 7.81825 5.6875 11.4375 5.6875Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          style={{ cursor: "pointer" }}
        >
          <path
            d="M13.125 25.4958C13.5843 25.4852 14.0251 25.3125 14.3694 25.0082C14.7136 24.704 14.9392 24.2878 15.0062 23.8333H11.1708C11.2397 24.3001 11.4758 24.7261 11.8353 25.0319C12.1948 25.3377 12.6531 25.5026 13.125 25.4958Z"
            fill="white"
          />
          <path
            d="M23.7052 20.7927C23.0021 20.1659 22.3865 19.4473 21.875 18.6563C21.3167 17.5644 20.982 16.372 20.8907 15.149V11.5469C20.8877 11.1094 20.8487 10.6728 20.774 10.2417C20.2001 10.127 19.6485 9.92014 19.1407 9.62921C19.3342 10.2525 19.4326 10.9015 19.4323 11.5542V15.1563C19.5217 16.6482 19.9321 18.1032 20.6355 19.4219C21.1389 20.2196 21.7362 20.954 22.4146 21.6094H3.74067C4.41909 20.954 5.01641 20.2196 5.51983 19.4219C6.2232 18.1032 6.63358 16.6482 6.72296 15.1563V11.5469C6.71912 10.703 6.88178 9.8667 7.20161 9.08577C7.52145 8.30485 7.99219 7.59468 8.58687 6.99594C9.18155 6.3972 9.88849 5.92164 10.6672 5.59649C11.4459 5.27134 12.2812 5.10299 13.125 5.10108C14.3601 5.10207 15.5674 5.46731 16.5959 6.15108C16.4825 5.73472 16.4189 5.30638 16.4063 4.87504V4.41567C15.6449 4.04114 14.827 3.79477 13.9855 3.6865V2.76775C13.9855 2.50958 13.8829 2.26198 13.7003 2.07942C13.5178 1.89687 13.2702 1.79431 13.012 1.79431C12.7538 1.79431 12.5063 1.89687 12.3237 2.07942C12.1411 2.26198 12.0386 2.50958 12.0386 2.76775V3.72296C10.1542 3.98878 8.42963 4.92735 7.18322 6.36541C5.93682 7.80346 5.25276 9.64389 5.25733 11.5469V15.149C5.16601 16.372 4.83134 17.5644 4.27296 18.6563C3.77048 19.4455 3.16477 20.164 2.47192 20.7927C2.39414 20.8611 2.3318 20.9452 2.28905 21.0395C2.24631 21.1338 2.22413 21.2361 2.224 21.3396V22.3313C2.224 22.5247 2.30082 22.7101 2.43757 22.8469C2.57431 22.9836 2.75978 23.0605 2.95317 23.0605H23.224C23.4174 23.0605 23.6029 22.9836 23.7396 22.8469C23.8763 22.7101 23.9532 22.5247 23.9532 22.3313V21.3396C23.953 21.2361 23.9309 21.1338 23.8881 21.0395C23.8454 20.9452 23.783 20.8611 23.7052 20.7927Z"
            fill="white"
          />
          <path
            d="M21.875 8.52079C23.8885 8.52079 25.5208 6.8885 25.5208 4.87496C25.5208 2.86142 23.8885 1.22913 21.875 1.22913C19.8615 1.22913 18.2292 2.86142 18.2292 4.87496C18.2292 6.8885 19.8615 8.52079 21.875 8.52079Z"
            fill="#DA3714"
          />
        </svg>
        <span id="signup-header" style={{ cursor: "pointer" }}>
          Sign up
        </span>
      </div>
      <div id="hamburger">
        <SwipeableTemporaryDrawer />
      </div>
    </header>
  );
}

export default Header;
