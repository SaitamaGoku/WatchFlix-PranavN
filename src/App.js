import "./App.css";
import CarouselHeader from "./components/Carousel/CarouselHeader";
import Categories from "./components/Categories/Categories";
import Trending from "./components/Trending/Trending";
import HomePageLayout from "./layout/HomePageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
                  <Trending />
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
