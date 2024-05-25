import React from "react";
import { Link } from "react-router-dom";
import { useMovieDataQuery } from "../services/get-data-movie";

export const SeAllMovie = () => {
  const { data } = useMovieDataQuery({
    // languange: "en-us",
    // page: "PageNow",
  });

  const movie = data ? data.results : [];

  return (
    <div className=" bg-black ">
      <div className="px-4 text-white">
        <h1 className="text-6xl font-semibold mb-4 text-center">POPULAR MOVIE</h1>
        <div className="grid grid-cols-4 gap-4">
          {movie.map((film) => (
            <div key={film.id} className="border rounded-md transition-transform transform hover:scale-105">
              <Link to={`/detail/${film.id}`}>
                <h1 className=" pl-2 pb-2 text-xl">{film.title}</h1>
                <img className="px-4 rounded-[1.5rem]" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}></img>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Release Date : {film.release_date}</h2>
                  <p>{film.overview}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
