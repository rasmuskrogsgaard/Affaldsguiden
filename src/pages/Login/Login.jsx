import Button from "../../components/Button/Button";
import styles from "./login.module.scss";

export const Login = () => {
  return (
    <div className={styles.formContainer}>
      <div>
        <article>
          <img src="/src/assets/logo.svg" alt="Logo"></img>
          <p>Log ind på Affaldsguiden for at anmelde stationer</p>
        </article>
      </div>
      <form id="loginForm" className={styles.formStyle}>
        <h2>Log ind</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <Button name="Log ind" />
      </form>
    </div>
  );
};
