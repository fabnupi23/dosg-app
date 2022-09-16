import React, { useState, useEffect } from "react";
import { getBreeds } from "../helpers/getBreeds";
import { Error } from "./Error";
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

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null); //Estado para manejar el error

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds  = () => {     //Se encarga de ralizar la petición a la API con el helper que acabamos de crear en getBreeds.js y después va a setear el estado breeds con los nuevos valores 
    getBreeds()
        .then((newBreeds) =>{
            setBreeds(newBreeds);
        })
        .catch((error) =>{
          setError("Error al cargar las razas");
        })
  }

  return (
    <>
    <select onChange={(e) => updateDog(e.target.value)}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>

    { error  && <Error error={error}/>}

    
    </>
  );
}

export { Select };
