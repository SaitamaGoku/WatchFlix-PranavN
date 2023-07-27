import "./App.css";
import CarouselHeader from "./components/Carousel/CarouselHeader";
import Categories from "./components/Categories/Categories";
import Trending from "./components/Trending/Trending";
import HomePageLayout from "./layout/HomePageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPlayer from "react-player";
import { CloseButton } from "@chakra-ui/react";
import { useState } from "react";
import Movie from "./components/Movie/Movie";
import More from "./components/Movie/More";
import Discover from "./components/Trending/Discover";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <HomePageLayout>
                  <CarouselHeader />
                  <Trending heading="Trending Now" />
                  <Discover heading="Suspense" />
                  <More heading="Sci-Fi" />
                </HomePageLayout>
              }
            />
            <Route
              path="categories"
              element={
                <HomePageLayout>
                  <Categories />
                </HomePageLayout>
              }
            />
            <Route
              path="movies/:id"
              element={
                <HomePageLayout>
                  <Movie />
                </HomePageLayout>
              }
            />
            <Route
              path="player"
              element={
                <HomePageLayout>
                  <ReactPlayer
                    url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={false}
                    light={
                      <>
                        <img
                          src="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2023/06/14115719/MIDR1_US_2023_SA_16x9_1920x1080_NB_2215190_1920x1080.jpeg"
                          alt="MI Poster"
                        ></img>
                      </>
                    }
                    style={{
                      margin: "auto",
                      justifySelf: "center",
                      alignSelf: "center",
                      zIndex: 200,
                    }}
                  />
                </HomePageLayout>
              }
            />
            <Route
              path="unauth"
              element={
                <HomePageLayout>
                  <div style={{ padding: "3rem" }}>
                    <h1 className="unauth">
                      You are Unauthorized to Enter this page as you have not
                      logged in/ Signed Up
                    </h1>
                  </div>
                </HomePageLayout>
              }
            />
            <Route
              path="*"
              element={
                <HomePageLayout>
                  <div style={{ padding: "3rem" }}>
                    <h1 className="unauth">404: Page Not Found</h1>
                  </div>
                </HomePageLayout>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
