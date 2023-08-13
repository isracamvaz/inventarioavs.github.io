const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/dispositivos";

fetch(API_URL)
    .then(response => response.json())  
    .then(dispositivos => mostrarDispositivos())
    .catch(err => console.log(err))

    const mostrarDispositivos = (dispositivos) => {
        console.log(dispositivos);
        let body = ''
        for (let i = 0; i < dispositivos.length; i++){
            body += `
            <tr>
                <td>${dispositivos[i].producto}</td>
                <td>${dispositivos[i].marca}</td>
                <td>${dispositivos[i].modelo}</td>
                <td>${dispositivos[i].lugar}</td>
            </tr>
            `
        }
        document.getElementById('dispositivos').innerHTML = body
    }

var btnAbrirPopup = document.getElementById('abrir-popup'),
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
});