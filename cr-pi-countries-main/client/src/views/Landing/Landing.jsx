import { Link } from "react-router-dom";
import style from "../Landing/Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={style.land}>
        <h1 className={style.mainText}>Welcome to the Countries web</h1>

        <Link className={style.startButton} to="/home">
          Start
        </Link>
      </div>
    </>
  );
};

export default Landing;
