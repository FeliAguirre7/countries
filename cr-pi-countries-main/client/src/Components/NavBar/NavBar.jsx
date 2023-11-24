import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/searchBar";
import worldImage from "../../assets/klipartz.com.png";

const NavBar = () => {
  return (
    <>
      <div className={style.mainNav}>
        <h1 className={style.title}>COUNTRIES</h1>
        <div className="logoContainer">
          <img src={worldImage} alt="World" className={style.worldImage} />
        </div>

        <Link to="/home">
          <div className={style.homeButton}>Home</div>
        </Link>
        <Link to="/create">
          <div className={style.createButton}>Create tourist activity</div>
        </Link>
        <SearchBar className={style.SearchBar}></SearchBar>
        <Link to="/">
          <div className={style.quitButton}>Quit</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
