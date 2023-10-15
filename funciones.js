const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/usuarios/login";
const formulario = document.querySelector('#form')
const parrafo = document.getElementById("warnings")
const btn = document.querySelector('#btn')


//Funcion para extraer los datos del form con FormData
const getData = () => {
    //Constructor que crea un objeto de tipo FormData
    const datos = new FormData(formulario); //El event.target nos da acceso al form
    //Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto de javascript
    const datosProcesados = Object.fromEntries(datos.entries()); //Le pasamos el objeto FormData
    return datosProcesados;
}

//Funcion para colocar los datos en el servido
const postData = async () => {
    //Creamos un nuevo usuario con los datos del formulario
    const newUser = getData();

    try{
        const response = await fetch(API_URL,{
            mode: 'no-cors',
            //Especificamos el metodo que usaremos
            method: 'POST',
            //Coloca la informacion en formato JSON
            headers: {'Content-Type': 'application/json'},
            //Escribimos lo que queremos colocar en el servidor
            body: JSON.stringify(newUser)
        })
         parrafo.innerHTML = ''
        if(response.status === 200){
            window.location.href='Inicio/inicio.html'
        }else{
            parrafo.innerHTML = `
            El usuario o contraseña son incorrectos <br>`
        }
    } catch(error){
        console.log(error);
    }
}

//Cuando el form se envie ejecutara una accion y funcion
btn.addEventListener('click',(event) => {
    event.preventDefault();
    postData();
})
