const API_URL = 'https://avsinventoryswagger25.azurewebsites.net/api/v1/usuarios';

/*fetch(API_URL, {
    'mode': 'no-cors',
    'headers': {
        'Access-Control-Allow-Origin': '*',
    }
})
    .then(usuarios => mostrarUsuarios())
    .catch(err => console.log(err))

    const mostrarUsarios = (usuarios) => {
        console.log(usuarios);
        let body = ''
        for (let i = 0; i < usuarios.length; i++){
            body += `
            <tr>
                <td>${usuarios[i].nombre}</td>
                <td>${usuarios[i].rol}</td>
            </tr>
            `
        }
        document.getElementById('usuarios').innerHTML = body
    }*/

    async function postData(url = "") {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, // body data type must match "Content-Type" header
        });
        console.log(response.)
        return response.json(); // parses JSON response into native JavaScript objects
      }
      
      postData(API_URL).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

/*var btnAbrirPopup = document.getElementById('abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});*/




