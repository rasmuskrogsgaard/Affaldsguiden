import { useState, useEffect } from "react";
export const Rules = () => {
const[rule, setRule] = useState(null); 


useEffect(() => {
    fetch(`http://localhost:3000/category/details/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) =>
        console.error("Error fetching section details:", error)
      );
  }, [id]);


}