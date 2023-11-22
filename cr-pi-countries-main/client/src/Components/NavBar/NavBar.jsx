import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={style.mainNav}>
        <Link to="/home">
          <div className={style.homeButton}>HOME</div>
        </Link>
        <Link to="/create">
          <div className={style.createButton}>Create tourist activity</div>
        </Link>
        <Link to="/">
          <div className={style.quitButton}>Quit</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
