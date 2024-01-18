const opciones = {
    enableHighAccuracy: true, // la llamada será más lenta pero precisa
    timeout: 5000, // cuanto tiempo pasará hasta que se cancele la funcion (5s)
    maximumAge: 0 //cuanto tiempo a pasao desde la ultima vez que se metio 0= cada vez que entre manda una llamada
};
 function crearMapa(lat, lon){

    var map = L.map('map', {zoomControl: false}).setView([lat, lon], 13);
     
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
     
    L.marker([lat, lon]).addTo(map)
    .bindPopup('El fin se acerca')
    .openPopup();
    var circle = L.circle([lat, lon], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(map);
 }

function exito(posicion) {
    console.log (posicion)
    // let lat = posicion.coords.latitude;
    // let lon = posicion.coords.longitude;
    // let timeStamp = posicion.timestamp
    // let accuracy = posicion.coords.accuracy
    // console.log("Latitud " + latitud);
    // console.log("Longitud " + longitud);
    // console.log("TimeStamp " + timeStamp)
    // const p = document.createElement("p");
    // p.innerHTML = `Latitud: ${lat} <br> Longitud: ${lon} <br> timeStamp: = ${timeStamp} <br> precision: = ${accuracy}`
    // document.body.appendChild(p);

    const {latitude, longitude, accuracy} = posicion.coords;
    const {timeStamp} = posicion;

    crearMapa(latitude, longitude);
}

function error(error) {
    console.log(error); 
}
navigator.geolocation.getCurrentPosition(exito, error, opciones);
