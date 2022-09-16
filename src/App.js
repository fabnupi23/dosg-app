import React, {useState, useEffect} from 'react'
import { Card } from './components/Card'
import { Error } from './components/Error'
import { Select } from './components/Select'
import { getDog } from './helpers/getDog'

const initialDog = {
  image:"",
  breed:{
    id: 0,
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect (() => { 
    updateDog();       //Ella hara el llamado a la función getDogs que obtendra los valores de la API
   },[]);              //Arreglo de dependencias que sera el arreglo vacio para que solo se ejecute la primera vez que se carga el App

  //creamos una nueva acción que nos permita realizar la actualización de la imagen 
  const updateDog  = (breedId) => {
    setLoading(true);
    getDog(breedId) //Si la llamada a la API se hace correctamente...
      .then((newDog) => { //...ejecuta esta función
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar un perro ");
        setLoading(false);
      })
  }

  return (
    <div className='app'>
      <Select updateDog={updateDog}/>

      { error && <Error error={error}/> }

      
      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  )
}

export default App
