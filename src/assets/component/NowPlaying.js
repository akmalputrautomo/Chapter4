import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useMovieDataQuery } from "../../services/get-data-movie";

const NowPlaying = () => {
  const { data } = useMovieDataQuery({
    // languange: "en-us",
    // page: "PageNow",
  });
  const movie = data ? data.results : [];

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {movie.map((film) => (
          <SwiperSlide key={film.id}>
            <div className="w-full h-[52rem] relative">
              <img className="w-full h-full bg-cover opacity-50 " src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}></img>
              <div className="absolute top-0 w-[50%] h-full flex flex-col justify-center gap-4 pl-10 text-white">
                <h1 className="text-5xl font-bold ">{film.title}</h1>
                <p className="text-xl">{film.overview}</p>
                <button className="bg-red-500 rounded-md block w-1/4 py-2 font-bold flex justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Watch Trailer</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default NowPlaying;
