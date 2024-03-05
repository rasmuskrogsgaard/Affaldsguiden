import style from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import unlock from "../../assets/icon-unlock.svg";

export const Navbar = () => {
  return (
    <>
      <nav className={style.navStyle}>
        <div className={style.logoContainer}>
          <img src={logo}></img>

          <h1><a href="/">Affaldsguiden</a></h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">Forside</NavLink>
          </li>
          <li>
            <NavLink to="/sortering">Sortering</NavLink>
          </li>
          <li>
            <NavLink to="/genbrugsstationer">Genbrugsstationer</NavLink>
          </li>
          <li>
            <NavLink to="/bestil">Bestil beholder</NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
        <div className={style.loginIcon}>
          <img className={style.loginImage} src={unlock}></img>
        </div>
      </nav>
    </>
  );
};
