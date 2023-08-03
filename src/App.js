import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayoutBox from "./Components/LayoutBox";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvShows from "./Pages/TvShows";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { moviedetails, movies, signin, signup, tvshows } from "./constants";
import MovieDetails from "./Pages/MovieDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} exact element={<LayoutBox />}>
          <Route path={"/"}  element={<Home/>} />
          <Route path={movies}  element={<Movies/>} />
          <Route path={tvshows}  element={ <TvShows/>} />
          <Route path={signup}  element={<SignUp/>} />
          <Route path={signin}  element={<SignIn/>} />
          {/* <Route path={moviedetails}  element={<MovieDetail1/>} /> */}
          <Route path={moviedetails}  element={<MovieDetails/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
