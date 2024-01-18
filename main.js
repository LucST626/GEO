navigator.geolocation.getCurrentPosition(exito, error);

function exito(posicion) {
  let latitud = posicion.coords.latitude;
  let longitud = posicion.coords.longitude;
  let timeStamp = posicion.timestamp
  console.log("Latitud " + latitud);
  console.log("Longitud " + longitud);
  console.log("TimeStamp " + timeStamp)
}

function error(error) {
  console.log(error);
}