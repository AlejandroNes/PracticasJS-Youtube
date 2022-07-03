//variables
const url = 'https://jsonplaceholder.typicode.com/users';
const respuesta = document.querySelector("#respuesta")

// evento
document.addEventListener("DOMContentLoaded", llamarAPI);



//funciones
 async function llamarAPI(){
  const respuesta = await fetch( url )
  const data = await respuesta.json()
  mostrarHTML(data)
   
}


function mostrarHTML(datos){
    
    datos.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.website}</td>
        `
        respuesta.appendChild(row)
    });

}
