import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h3>Affaldsguiden</h3>
          <p>
            Vi arbejder for at informere om korrekt affaldsortering. Ved at
            sortere hjælper du os, men også klimaet
          </p>

          <span>©2023 Affaldsguiden.</span>
          <div className={style.backToTop}>
            <img src="http://localhost:3000/Assets/Images/Layout/icon-arrow-up.svg"></img>
            <p>
              <a href="#top">Back to top</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
