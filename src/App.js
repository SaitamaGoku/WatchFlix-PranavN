import "./App.css";
import CarouselHeader from "./components/Carousel/CarouselHeader";
import Categories from "./components/Categories/Categories";
import Trending from "./components/Trending/Trending";
import HomePageLayout from "./layout/HomePageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactPlayer from "react-player";

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
                  <Trending heading="Horror" />
                  <Trending heading="Sci-Fi" />
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
              path="player"
              element={
                <HomePageLayout>
                  <ReactPlayer
                    url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4"
                    width="80%"
                    height="100%"
                    controls={true}
                    playing={false}
                    style={{ margin: "auto" }}
                  />
                </HomePageLayout>
              }
            />
            <Route
              path="unauth"
              element={
                <h1>
                  You are Unauthorized to Enter this page as you have not logged
                  in/ Signed Up
                </h1>
              }
            />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
