import axios from "./axios";
import React, { useEffect, useRef, useState } from "react";
import "./Row.css";
import { AiOutlineLeft, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { BiChevronDown, BiChevronsDown } from "react-icons/bi";
import SingleImage from "./SingleImage";

function Row({ title, fetchUrl, isLargeRow = false, isLiked = false }) {
  const [movies, setMovies] = useState([]);
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div
      className="row_outer"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2>{title}</h2>
      <div>
        <div className={`slider-action left ${!showControls ? "none" : ""} `}>
          <AiOutlineLeft
            onClick={() => handleDirection("left")}
            className="aiIcon"
          />
        </div>
        <div className="slider" ref={listRef}>
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <>
                  <SingleImage isLargeRow={isLargeRow} movie={movie} />
                </>
              )
          )}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight
            onClick={() => handleDirection("right")}
            className="aiIcon"
          />
        </div>
      </div>
    </div>
  );
}

export default Row;
