const url = 'https://www.mockachino.com/a71b232c-218e-4d/users'


 const obtenerUsuarios = async() => {

   try {
    const respuesta= await fetch (url);

    if (!respuesta.ok) throw'No se pudo cargar la API';

    const data = await respuesta.json();
    const usuarios = data.results
    return usuarios;

   }catch(err) {
  
    throw err
}


}

obtenerUsuarios().then(console.log)
const body  = document.body;
let card;

const hacerHtml = () => {
    
    const html = ` <div class="cardsContainer">
   
                        <div id="card">
                        </div>
                    </div>`;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
    card=document.getElementById('card')
   


}

const crearCardUsuario = ( usuario ) => {
    const {

        picture: {
        
        large
        }
         } = usuario

    // const  img = usuario.picture.large
    const name = usuario.name.first 
    const lastName = usuario.name.last 
    const city = usuario.location.city
    const state = usuario.location.state
    const pc = usuario.location.postcode

   
    const html = `
    <img class="foto" src="${large}" alt="persona">
    <div class="cardDatos">
        <h3 class="nombre">${name} ${lastName}</h3>
        <i class="fas fa-filter puesto">Recruitment Consultancy</i>
        <i class="fas fa-map-marker-alt ciudad">${city}, ${state} ${pc} </i>
        <hr>
        <div>
            <i class="far fa-clock activo">1M ago</i>
            <i class="far fa-heart"></i>
        </div>
        
        
    </div>
    `;

    const divCard = document.createElement('div');
    divCard.innerHTML = html;
    divCard.classList.add('user')
    // Añadir el table row (tr) dentro del TBody creado anteriormente
    card.appendChild(divCard)
}

 const init = async() => {

    hacerHtml();
   

    const usuarios = await obtenerUsuarios();
    usuarios.forEach(crearCardUsuario);

}


init()
