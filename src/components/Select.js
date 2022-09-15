import React, { useState, useEffect } from "react";
import { getBreeds } from "../helpers/getBreeds";

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];

function Select() {
  const [breeds, setBreeds] = useState(initialBreeds);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds  = () => {     //Se encarga de ralizar la petición a la API con el helper que acabamos de crear en getBreeds.js y después va a setear el estado breeds con los nuevos valores 
    getBreeds()
        .then((newBreeds) =>{
            setBreeds(newBreeds);
        })
  }

  return (
    <select onChange={() => alert("Change")}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
}

export { Select };
