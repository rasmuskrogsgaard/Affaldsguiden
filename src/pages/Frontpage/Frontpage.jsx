import { Hero } from "../../components/Hero/Hero";
import style from "./frontpage.module.scss";
import Button from "../../components/Button/Button";
export const Frontpage = () => {
  return (
    <>
      <section id="top">
        <Hero />
      </section>
      <section >
        <div className={style.figureContainer}>
          <figure>
            <figcaption>
              <h2>Din <span>guide til sortering</span></h2>
              <article>
                <p>
                  Her kan du se hvordan du skal sortere og hvad der skal i
                  hvilke beholdere. Du får også tips og tricks til, hvordan du
                  gør det nemt at sortere hjemme.
                </p>
              </article>
              <div className={style.buttonContainer}>
                <Button name="placeholder" />
                <Button name="placeholder" />
              </div>
            </figcaption>
            <div className={style.figImg}>
            <img src="http://localhost:3000/Assets/Images/Photos/medium/plastflasker.jpg" alt="plastflasker" />
              
            </div>
          </figure>

          <figure>
            <div className={style.figImg}>
            <img src="http://localhost:3000/Assets/Images/Photos/medium/affaldssortering-1.jpg" alt="affaldssortering" />
            </div>
            
            <figcaption>
              <h2>Bestil <span>din nye affaldsbeholder</span></h2>
              <article>
                <p>
                  Her kan du se hvordan du skal sortere og hvad der skal i
                  hvilke beholdere. Du får også tips og tricks til, hvordan du
                  gør det nemt at sortere hjemme.
                </p>
              </article>
              <div className={style.buttonContainer}>
                <Button name="placeholder" />
                <Button name="placeholder" />
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};
