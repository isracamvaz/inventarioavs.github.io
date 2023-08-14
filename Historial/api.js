const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/movimientos";

const mostrarMovimientos = async(movimientos) => {
    try{
        const response = await fetch(API_URL, {
            'mode': 'no-cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
        console.log(response);

        if(response.status === 200) {
            
        let historial = ''
        for (let i = 0; i < historial.length; i++) {
            historial += `
            <tr>
                <td>${movimientos[i].producto}</td>
                <td>${movimientos[i].marca}</td>
                <td>${movimientos[i].descripcion}</td>
                <td>${movimientos[i].lugar}</td>
            </tr>
            `
        }
        document.getElementById('movimientos').innerHTML = historial
    } else {
        console.log('Error');
    }  
} catch(error){
    console.log(error);
}
}


