import style from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import unlock from "../../assets/icon-unlock.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const notifyWarning = () => {
    toast.warn("Page under maintenance", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
    });
  };

  return (
    <>
      <nav className={style.navStyle}>
        <div className={style.logoContainer}>
          <img src={logo}></img>

          <h1>
            <a href="/">Affaldsguiden</a>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">Forside</NavLink>
          </li>
          <li>
            <NavLink to="/sortering">Sortering</NavLink>
          </li>
          <li>
            <NavLink onClick={notifyWarning} to="/">
              Genbrugsstationer
            </NavLink>
          </li>
          <li >
            <NavLink onClick={notifyWarning} to="/">
              Bestil beholder
            </NavLink>
           
          </li>
        </ul>
        <div className={style.loginIcon}>
          <img className={style.loginImage} src={unlock}></img>
        </div>
      </nav>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
