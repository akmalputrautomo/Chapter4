import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMovieDataQuery } from "../../services/get-data-movie";
import { Link } from "react-router-dom";

export const PopularMovie = () => {
  const { data } = useMovieDataQuery({
    // languange: "en-us",
    // page: "PageNow",
  });

  const movie = data ? data.results : [];

  return (
    <div className="h-full mt-10">
      <div className="font-bold flex justify-between px-2 items-center mb-10">
        <h1 className=" text-5xl text-white ">Popular Movie</h1>
        <form className="text-xl text-red-500 gap-2 justify-center items-center flex">
          <a href="/allmovie">See All Movie</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </form>
      </div>
      <div>
        <Swiper spaceBetween={50} slidesPerView={4} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          {movie.map((film) => (
            <SwiperSlide>
              <Link to={`/detail/${film.id}`}>
                <img className="px-4 rounded-[1.5rem] transition-transform transform hover:scale-105" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title}></img>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
