import React from 'react'
import { Spinner } from './Spinner'


function Card({ dog, loading, updateDog }) {

  if(loading) return <Spinner/>

  return (
    <div className='card bounce' onClick={() => updateDog(dog.breed.id)}>
        <img
            src={dog.image}
            alt='dog'
         />
         <p>
            {dog.breed.name}
         </p>
    </div>
  )
}

export { Card };