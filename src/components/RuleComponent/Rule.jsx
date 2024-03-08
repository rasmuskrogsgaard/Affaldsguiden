import React, { useState, useEffect } from "react";
import style from "./rule.module.scss"
export const Rules = ({ id }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/category/details/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) =>
        console.error("Error fetching section details:", error)
      );
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.tableStyle}>
      
      <table>
        <thead>
          <tr>
            
            <th>Hvad modtager vi?</th>
            
          </tr>
        </thead>
        <tbody>
          {details.types.map((type) => (
            <tr key={type.id}>
              <td>{type.title}</td>
              <td>{type.rules.is_allowed ? "Ja" : "Nej"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
