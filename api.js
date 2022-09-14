// fetch('datos.txt')
//     .then(function(response) {
//         return response.text();
//     }) //que clase de informacion estoy pidiendop
//     .then(function(data) {
//         console.log(data)
//     }) //extrae los datos de consumo
//     .catch(function(error) {
//         console.log('Hemos tenido un error: ${error}')

//     })

// fetch('datos.txt')
//     .then((response) => response.text()
//         .then((data) => console.log(data))
//         .catch((error) => console.log(``
//                 Hemos tenido un error: $ { error }
//                 '))
// let url = 'datos.txt'
// fetch(url)
//     .then(response => response.text())
//     .then(data => {
//         let inf = document.getElementById('datos');
//         inf.innerHTML = data
//     })
//     .catch(error => console.log('hemos tenido un eror: ${error}'))
let url = 'datos1.json';
fetch(url)
    .then(res => res.json())
    .then(data => {
        let imp = document.getElementById('datos')
            // imp.innerHTML = data[0].nombre + " "
        let mensaje = "";
        for (let index = 0; index < data.length; index++) {
            mensaje = mensaje + data[index].nombre + " " + data[index].apellido + '<br>';

        }
        imp.innerHTML = mensaje;
    })
    .catch(error => console.log('Hemos detectado un error: ${error}'))