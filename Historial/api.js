const API_URL = "https://avsinventoryswagger25.azurewebsites.net/api/v1/movimientos";

fetch(API_URL)
    .then(response => response.json())  
    .then(movimientos => mostrarMovimientos())
    .catch(err => console.log(err))

    const mostrarMovimientos = (movimientos) => {
        console.log(movimientos);
        let body = ''
        for (let i = 0; i < movimientos.length; i++){
            body += `
            <tr>
                <td>${movimientos[i].producto}</td>
                <td>${movimientos[i].marca}</td>
                <td>${movimientos[i].descripcion}</td>
                <td>${movimientos[i].lugar}</td>
            </tr>
            `
        }
        document.getElementById('movimientos').innerHTML = body
    }

