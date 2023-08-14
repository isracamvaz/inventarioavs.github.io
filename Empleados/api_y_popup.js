const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/usuarios";

    const mostrarUsuarios = async(usuarios) => {
        try{
            const response = await fetch(API_URL, {
                'mode': 'no-cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            console.log(response);

            if(response.status === 200) {
                
            let empleados = ''
            for (let i = 0; i < usuarios.length; i++) {
                usuarios += `
                <tr>
                    <td>${usuarios[i].nombre}</td>
                    <td>${usuarios[i].rol}</td>
                </tr>
                `
            }
            document.getElementById('usuarios').innerHTML = empleados
        } else {
            console.log('Error');
        }  
    } catch(error){
        console.log(error);
    }
}

mostrarUsuarios();

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




