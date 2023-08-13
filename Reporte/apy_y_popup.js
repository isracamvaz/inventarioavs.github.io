const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/reportes";

fetch(API_URL)
    .then(response => response.json())  
    .then(reportes => mostrarReportes())
    .catch(err => console.log(err))

    const mostrarReportes = (reportes) => {
        console.log(reportes);
        let body = ''
        for (let i = 0; i < reportes.length; i++){
            body += `
            <tr>
                <td>${reportes[i].producto}</td>
                <td>${reportes[i].marca}</td>
                <td>${reportes[i].comentarios}</td>
                <td>${reportes[i].lugar}</td>
            </tr>
            `
        }
        document.getElementById('reportes').innerHTML = body
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