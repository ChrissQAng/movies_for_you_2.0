import "./Home.css";
import { useEffect, useState } from "react";
import movies from "../database.jsx";

// {
//     title: "Dead Poets Society",
//     year: "1989",
//     director: "Peter Weir",
//     duration: "2h 8min",
//     genre: ["Comedy", "Drama"],
//     rate: "8.0",
//   },
const Home = () => {
  //  use-States
  const [sort, setSort] = useState(0);
  const [movieData, setMovieData] = useState(movies);
  const [titleInput, setTitleinput] = useState("");

  //   sort function

  useEffect(() => {
    setMovieData(
      movies
        .filter((movie) =>
          movie.title
            .toLocaleLowerCase()
            .includes(titleInput.toLocaleLowerCase())
        )
        .toSorted((a, b) => {
          if (sort === 1) {
            return a.year - b.year;
          } else if (sort === 2) {
            return b.year - a.year;
          } else if (sort === 3) {
            return b.rate - a.rate;
          } else if (sort === 4) {
            return a.title.localeCompare(b.title);
          } else if (sort === 5) {
            return b.title.localeCompare(a.title);
          }
        })
    );

    //   spread-Operator gibt das selbe array in neuer Reihenfolge zurück und
    // löst hier ein neues Rendering aus
    // setMovieData([...movieData]);
  }, [sort, titleInput]);

  // search function

  return (
    <div className="whole-page">
      <header className="header">
        <h1>MOVIES FOR YOU</h1>
        <div className="sort-buttons">
          <button onClick={() => setSort(1)}>Sort by Data Ascending</button>
          <button onClick={() => setSort(2)}>Sort by Data Descending</button>
          <button onClick={() => setSort(3)}>Best Rate</button>
          <button onClick={() => setSort(4)}>A-Z</button>
          <button onClick={() => setSort(5)}>Z-A</button>
          <input
            type="text"
            placeholder="movie title"
            value={titleInput}
            onChange={(event) => {
              setTitleinput(event.target.value);
            }}
          />
        </div>
      </header>
      <main className="movie-page">
        {movieData.map((singleMovie, index) => (
          <article key={index} className="single-article">
            <p className="title">{singleMovie.title}</p>
            <p>{singleMovie.year}</p>
            <p>{singleMovie.director}</p>
            <p>{singleMovie.duration}</p>
            <p>{singleMovie.rate}</p>

            {/* Alternative <p>{movie.genre.join(", ")}</p>*/}
            <div className="wrapper-genre">
              {singleMovie.genre.map((genre, index) => (
                <p key={index} className="genre">
                  {genre}
                </p>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Home;
