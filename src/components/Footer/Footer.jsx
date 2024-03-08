import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.leftContent}>
          
          <h3><img src="/src/assets/logo.svg" />Affaldsguiden</h3>
          <p>
            Vi arbejder for at informere om korrekt affaldsortering. Ved at
            sortere hjælper du os, men også klimaet
          </p>
          <span>©2023 Affaldsguiden.</span>
        </div>
        <div className={style.rightContent}>
          <div className={style.backToTop}>
            <img src="http://localhost:3000/Assets/Images/Layout/icon-arrow-up.svg" alt="Back to top" />
            <p><a href="#top">Back to top</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
