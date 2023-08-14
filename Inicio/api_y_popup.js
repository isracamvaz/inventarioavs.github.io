
    const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/dispositivos";

    const mostrarDispositivos = async(dispositivos) => {
        try{
            const response = await fetch(API_URL, {
                'mode': 'no-cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            console.log(response);

            if(response.status === 200) {
                
            let productos = ''
            for (let i = 0; i < productos.length; i++) {
                usuarios += `
                <tr>
                    <td>${dispositivos[i].producto}</td>
                    <td>${dispositivos[i].marca}</td>
                    <td>${dispositivos[i].modelo}</td>
                    <td>${dispositivos[i].lugar}</td>
                </tr>
                `
            }
            document.getElementById('dispositivos').innerHTML = productos
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