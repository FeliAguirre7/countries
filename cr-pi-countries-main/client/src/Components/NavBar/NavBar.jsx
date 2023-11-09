import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={style.mainNav}>
        <Link to="/home">HOME</Link>
        <Link to="/create">Create tourist activity</Link>
        <Link to="/">Quit</Link>
      </div>
    </>
  );
};

export default NavBar;
