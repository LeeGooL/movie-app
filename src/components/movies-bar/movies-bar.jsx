import React from "react";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import movies from "@store/movies";

import { createPages } from "@utils/pages-creator";

import "./movies-bar.scss";

const MoviesBar = observer(() => {
  const { pagesCount, moviesCount } = movies;
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  React.useEffect(() => {
    movies.fetchMovies(currentPage);
  }, [currentPage]);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const increaseCurrentPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const reduceCurrentPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  return (
    <div className="movies-bar">
      <div className="movies-bar__row first">
        <div className="movies-bar__row-wrapper">
          <div className="movies-bar__count">{moviesCount} movies</div>

          <div className="movies-bar__tags">
            <div className="movies-bar__tag">
              genre
              <svg
                className="movies-bar__tag-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="18px"
                height="18px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>

            <div className="movies-bar__tag">
              rating
              <svg
                className="movies-bar__tag-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="18px"
                height="18px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>

            <div className="movies-bar__tag">
              year
              <svg
                className="movies-bar__tag-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="18px"
                height="18px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="movies-bar__row second">
        <div className="movies-bar__pagination">
          <button
            className="pagination__button back"
            onClick={reduceCurrentPage}
            disabled={currentPage === 1 ? true : false}
          >
            back
          </button>

          <ul className="pagination__list">
            {pages &&
              pages.map((page, index) => {
                return (
                  <li
                    className={classNames("pagination__list-page", {
                      active: currentPage === page,
                    })}
                    key={index}
                    onClick={() => onChangePage(page)}
                  >
                    {page}
                  </li>
                );
              })}
          </ul>

          <button
            className="pagination__button next"
            onClick={increaseCurrentPage}
            disabled={currentPage === pagesCount ? true : false}
          >
            next
          </button>

          <div className="pagination__pages-count">
            TotalPages: {pagesCount}
          </div>
        </div>

        <div className="movies-bar__sorting">
          <div className="movies-bar__sorting-title">sort by:</div>

          <select
            name=""
            id=""
            placeholder="sorting by"
            className="movies-bar__sorting-select"
          >
            <option value="none" hidden="">
              don't sorting
            </option>

            <option value="name" hidden="">
              name
            </option>

            <option value="rat-asc" hidden="">
              rating (ascending)
            </option>

            <option value="rat-des" hidden="">
              rating (descending)
            </option>

            <option value="pop-asc" hidden="">
              popularity (ascending)
            </option>

            <option value="pop-des" hidden="">
              popularity (descending)
            </option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default MoviesBar;
