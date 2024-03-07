import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.scss";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/section/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) =>
        console.error("Error fetching section details:", error)
      );
  }, [id]);

  const handleCategoryToggle = (categoryId) => {
    setExpandedCategory(categoryId === expandedCategory ? null : categoryId);
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  const sectionStyle = {
    backgroundColor: `#${details.color}`,
  };

  return (
    <>
      <div style={sectionStyle} className={style.detailSection}>
        <h2>{details.title}</h2>
        <img src={details.filepath} alt={details.title} />
      </div>
      <section>
        <div className={style.categoriesContainer}>
          {details.categories.map((category) => {
            const isExpanded = expandedCategory === category.id;
            return (
              <div key={category.id} className={style.category}>
                <div className={style.categoryHeader}>
                  <img
                    src={category.icon_filepath}
                    alt={category.title}
                    className={style.categoryIcon}
                  />
                  <h3 className={style.categoryTitle}>{category.title}</h3>
                  <button
                    className={style.toggleButton}
                    onClick={() => handleCategoryToggle(category.id)}
                  >
                    {isExpanded ? "Collapse" : "Expand"}
                  </button>
                </div>
                {isExpanded && (
                  <div className={style.categoryContent}>
                  
                    <p>content</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Details;
