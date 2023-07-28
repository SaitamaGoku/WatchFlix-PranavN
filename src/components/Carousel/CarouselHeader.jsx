import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Rating from "@mui/material/Rating";
import response from "../../assets/res.json";
import StarIcon from "@mui/icons-material/Star";
import ReactPlayer from "react-player";
import { CloseButton } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../../store/recoil_store";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://api.themoviedb.org/3/trending/movie/day",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    accept: "application/json",
  },
};

const imgPrefix = "https://image.tmdb.org/t/p/w500";
// console.log("res",response)
function CarouselHeader() {
  const [data, setData] = useState();
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  //API Call
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setData(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Response Stored
  // useEffect(() => setData(response), []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        // width: "88.79vw",
      }}
    >
      {/* <span id="trending-heading">Trending Now</span> */}
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        showIndicators={false}
        interval={20000}
        // infiniteLoop={true}
        style={{ alignSelf: "center" }}
      >
        {/* <div className="trending-list"> */}

        {data?.results.map((item, index) => {
          let imgLink = imgPrefix + item?.backdrop_path;
          return (
            // <div
            //   className="trending-image"
            //   style={{
            //     background: `url(${imgLink}), lightgray 50% / cover no-repeat`,
            //     margin: "auto",
            //   }}
            // ></div>
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {isPlaying && (
                <>
                  <ReactPlayer
                    url="https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4"
                    // width="61%"
                    // height="80%"
                    width="88.79vw"
                    height="85.674vh"
                    controls={true}
                    playing={isPlaying}
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
                      position: "absolute",
                      // left: "50%",
                      // top:"50%",
                      justifySelf: "center",
                      alignSelf: "center",
                      zIndex: 200,
                    }}
                  />
                  <CloseButton
                    className="close-btn"
                    onClick={() => setIsPlaying(!isPlaying)}
                  />
                </>
              )}

              <div
                className="image-container"
                style={{ visibility: isPlaying ? "hidden" : "visible" }}
              >
                <img
                  src={imgLink}
                  alt={item?.title}
                  style={{
                    width: "88.79vw",
                    // minHeight: "85.674vh",
                    minHeight: "32rem",
                    // height:"max-content",
                    // width:"83.907rem",
                    maxHeight: "41.766rem",
                    objectFit: "cover",
                    opacity: "50%",
                    borderRadius: "0.9375rem",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "2.2rem",
                    left: "4vw",
                    alignItems: "flex-start",
                    width: "50.331vw",
                    // height: "54.808vh",
                    height: "26.719rem",
                    gap: "1rem",
                  }}
                >
                  <div className="image-heading">{item?.title}</div>
                  <div className="image-overview">{item?.overview}</div>
                  <Rating
                    name="read-only"
                    value={item?.vote_average / 2}
                    precision={0.1}
                    emptyIcon={<StarIcon />}
                    readOnly
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "2.381vw",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="watchnow-btn"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="#FFF"
                        >
                          <path
                            d="M14.75 7.70096C15.75 8.27831 15.75 9.72169 14.75 10.299L2.375 17.4438C1.375 18.0211 0.125 17.2994 0.125 16.1447L0.125 1.85529C0.125 0.700587 1.375 -0.0210977 2.375 0.556252L14.75 7.70096Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="watchnow-text">Watch Now</span>
                      <span className="watchnow-text-small">Watch</span>
                    </button>
                    <div className="btn-holder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_170)">
                          <path
                            d="M14.5 14.25V6.75H17V14.25H24.5V16.75H17V24.25H14.5V16.75H7V14.25H14.5Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_170">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0.75 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="btn-holder-text">WATCHLIST</span>
                    </div>
                    <div className="btn-holder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_176)">
                          <path
                            d="M17.7408 21.3255L12.0933 18.2453C11.5512 18.7834 10.8619 19.149 10.1123 19.2959C9.36274 19.4429 8.58644 19.3646 7.88129 19.071C7.17614 18.7774 6.5737 18.2816 6.14992 17.6461C5.72614 17.0106 5.5 16.2638 5.5 15.5C5.5 14.7362 5.72614 13.9894 6.14992 13.3539C6.5737 12.7184 7.17614 12.2226 7.88129 11.929C8.58644 11.6354 9.36274 11.5571 10.1123 11.7041C10.8619 11.851 11.5512 12.2166 12.0933 12.7547L17.7408 9.67453C17.5471 8.76576 17.687 7.81765 18.1349 7.00355C18.5828 6.18946 19.3088 5.56379 20.1801 5.24097C21.0514 4.91814 22.0098 4.91973 22.88 5.24545C23.7502 5.57116 24.4741 6.19923 24.9193 7.01481C25.3645 7.83038 25.5012 8.77896 25.3045 9.68707C25.1078 10.5952 24.5908 11.4022 23.848 11.9604C23.1052 12.5186 22.1863 12.7909 21.2593 12.7273C20.3323 12.6637 19.4592 12.2686 18.7996 11.6141L13.152 14.6943C13.2647 15.2255 13.2647 15.7745 13.152 16.3057L18.7996 19.3859C19.4592 18.7314 20.3323 18.3363 21.2593 18.2727C22.1863 18.2091 23.1052 18.4814 23.848 19.0396C24.5908 19.5978 25.1078 20.4048 25.3045 21.3129C25.5012 22.221 25.3645 23.1696 24.9193 23.9852C24.4741 24.8008 23.7502 25.4288 22.88 25.7546C22.0098 26.0803 21.0514 26.0819 20.1801 25.759C19.3088 25.4362 18.5828 24.8105 18.1349 23.9964C17.687 23.1824 17.5471 22.2342 17.7408 21.3255Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_176">
                            <rect
                              width="30"
                              height="30"
                              fill="white"
                              transform="translate(0.25 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="btn-holder-text">SHARE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </Carousel>
    </div>
  );
}

export default CarouselHeader;
