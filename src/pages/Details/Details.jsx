import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.scss";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/section/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) =>
        console.error("Error fetching section details:", error)
      );
  }, [id]);

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
      <section></section>
    </>
  );
};

export default Details;
