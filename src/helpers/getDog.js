const getDog = async (breedId) => {

  let url;

  if(!breedId || breedId === 0){
     url = "https://api.thedogapi.com/v1/images/search";
  }else{
     url = "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;
  }
  
  const res = await fetch(url);

  
  if(!res.ok){
    const { url, status, statusText} = res;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }

  const [data] = await res.json();

  let { url: image, breeds: [breed]} = data;  //en la variable breed la ponemos [breed] para que me inicie en la posición cero 

  if(!breed){
    breed = {
      id: 0,
      name:'random'
    }
  }

  const dog = {
    image,
    breed,
  }

  return dog;
}

export { getDog };