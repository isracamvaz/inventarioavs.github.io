const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/reportes";

const mostrarReportes = async(reportes) => {
    try{
        const response = await fetch(API_URL, {
            'mode': 'no-cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
        console.log(response);

        if(response.status === 200) {
            
        let data = ''
        for (let i = 0; i < data.length; i++) {
            data += `
            <tr>
                <td>${reportes[i].producto}</td>
                <td>${reportes[i].marca}</td>
                <td>${reportes[i].comentario}</td>
                <td>${reportes[i].lugar}</td>
            </tr>
            `
        }
        document.getElementById('reportes').innerHTML = data
    } else {
        console.log('Error');
    }  
} catch(error){
    console.log(error);
}
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