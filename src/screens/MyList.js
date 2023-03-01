import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import SingleImage from "../SingleImage";
import "./MyList.css";

function MyList() {
  const { user } = useSelector(selectUser);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieString = localStorage.getItem(user && user.email);
    setMovies(JSON.parse(movieString));
  }, []);
  const removeFromList = (movie) => {
    const currentMovies = movies.filter((value) => {
      console.log("movieid", value.id, movie.id);
      return value.id !== movie.id;
    });
    setMovies(currentMovies);
    const movieString = JSON.stringify(currentMovies);
    console.log("movieString", currentMovies, movies);
    localStorage.setItem(user && user.email, movieString);
    return movieString;
  };
  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="myList_content">
        <h2>My List</h2>
        <div className="myList_posters">
          {movies &&
            movies.map((movie) => (
              <>
                <SingleImage
                  isLargeRow={false}
                  movie={movie}
                  isLiked={true}
                  removeFromList={removeFromList}
                />
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyList;
