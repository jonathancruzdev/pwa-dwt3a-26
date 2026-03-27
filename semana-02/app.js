const btn = document.querySelector('button');
const pre = document.querySelector('pre');

const map = L.map('map').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map);

const marker = L.marker( [-34.6037, -58.3816] ).addTo(map);
marker.bindPopup('Estoy Aquí').openPopup();



btn.addEventListener('click', obtenerCoordenadas)

function obtenerCoordenadas(){
    // Validamos que se compatible
    if('geolocation' in navigator){
        console.log('Obteniendo Coordenadas'); // callback
        navigator.geolocation.getCurrentPosition( success, error );

    } else {
        pre.innerText = 'Tu navegador no soporta Geolocalización';
    }
}

function success(pos){
    console.log(pos);
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    pre.innerText = `Latitud: ${latitude} & Longitud: ${longitude}`;

    const actual = L.marker( [latitude, longitude] ).addTo(map);
    actual.bindPopup('Estoy!').openPopup();


}

function error(){
    pre.innerText = 'Ocurrio un error 😒';
}