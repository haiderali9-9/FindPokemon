const element = document.querySelector('#search-p');
element.addEventListener('click',getpokemon);

function uppercase(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
};
function lowercase(string){
  return string.toLowerCase();
}


function getpokemon(){
    var name = document.querySelector('#search-b').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${lowercase(name)}`).then((response)=>response.json()).then((data)=>{
    document.querySelector('.card').innerHTML = `
    <div class="card-img">
    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
    </div>
    <div class="card-dis">
    <h1>${uppercase(data.name)}</h1>
    <ul>
    <li>Type: ${uppercase(data.types[0].type.name)}</li>
    <li>Weight: ${data.weight} kg</li>
    <li>Height: ${data.height} m</li>
    <li>Base Experience: ${data.base_experience}</li>
    </ul>
    </div>
    `}).catch((err)=>{
     console.log("Empty String");
     });};


