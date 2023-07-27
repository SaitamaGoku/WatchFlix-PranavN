import { useEffect, useState } from "react";
import axios from "axios";
import response from "../../assets/res.json";

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

function Trending(props) {
  const [data, setData] = useState();

  //API Call
  //   useEffect(() => {
  //     axios
  //       .request(config)
  //       .then((response) => {
  //         setData(response.data);
  //         console.log(JSON.stringify(response.data));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  //Response Stored
  useEffect(() => setData(response), []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // margin: "0",
        padding: "3rem",
        // paddingTop: "3rem",
      }}
    >
      <span id="trending-heading">{props?.heading}</span>
      <div className="trending-list">
        {data?.results.map((item, index) => {
          let imgLink = imgPrefix + item?.backdrop_path;
          return (
            // <div
            //   className="trending-image"
            //   style={{
            //     background: `url(${imgLink}), lightgray 50% / cover no-repeat`,
            //   }}
            // ></div>
            <div className="trending-wrapper" key={index}>
              <img src={imgLink} alt={item?.title} className="trending" />
              <div className="trending-title">{item?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
