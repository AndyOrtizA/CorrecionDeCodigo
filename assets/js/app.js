const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');



async function displayUser(username) {

  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data =await response.json();

  console.log(data);

      $n.innerText = data.name;
      $b.innerHTML= `${data.blog}`;
      $l.innerHTML = `${data.location}`; 
  }
  catch(error){
    console.log(error);
  }
  
}//displayUser

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);