import style from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Login Success", {
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

  //til at logge ind https://github.com/rasmuskrogsgaard/teaterProject

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = new URLSearchParams();
      body.append("username", email);
      body.append("password", password);
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: body,
        redirect: "follow",
        headers: {
          "Content.Type": "application/x-www-form-urlencoded",
        },
      });

      if (!response.ok) {
        throw new Error("fejl for fanden");
      }

      const data = await response.json();
      localStorage.setItem("userToken", data.access_token);
      localStorage.setItem("username", email);
      localStorage.setItem("userId", data.user.id);
      notify()
    } catch (error) {
      console.error("login fejl for fan:", error);
    }
  };

  return (
    <div className={style.formContainer}>
      <div>
        <article className={style.loginArticle}>
          <img src="/src/assets/logo.svg" alt="Logo"></img>
          <p>Log ind på Affaldsguiden for at anmelde stationer</p>
        </article>
      </div>
      <form onSubmit={handleLogin} id="loginForm" className={style.formStyle}>
        <h2>Log ind</h2>
        <div className={style.formGroup}>
          <label htmlFor="email"></label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            email={email}
            name="username"
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password"></label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <input type="submit" value="login"></input>
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
      </form>
    </div>
  );
};
