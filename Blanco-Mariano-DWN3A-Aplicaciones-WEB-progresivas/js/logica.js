const API_KEY = '';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

var Nombre = document.querySelector('#Nombre');
var TempMax = document.querySelector('.TempMax');
var TempMin = document.querySelector('.TempMin');
var Humedad = document.querySelector('.Humedad');
var SenTerm = document.querySelector('.SenTerm');
var PresAtmos = document.querySelector('.PresAtmos');
var VelViento = document.querySelector('.VelViento');
var Clima = document.querySelector('.Clima');
var Icono = document.querySelector('.Icono');



const button = document.getElementById("sendButton");
const logica = document.getElementById("logica");
const inputElement = document.getElementById("search");

button.addEventListener("click", ()=>{
    searchGift(inputElement.value);
});

function searchGift(wordToSearch){
    console.log('Ciudad', wordToSearch);

    const fetchPromise = fetch(`${URL}?q=${wordToSearch}&appid=${API_KEY}&units=metric&lang=es`)
    
fetchPromise.then(response =>{
    console.log('result', response);
    return response.json();
}).then(result => {
    console.log(result);
    
    var NombreCiudad = result['name'];
    var TempMaxValue = result ['main']['temp_max'];
    var TempMinValue = result ['main']['temp_min'];
    var HumedadValue = result ['main']['humidity'];
    var SenTermValue = result ['main']['temp'];
    var PresAtmosValue = result ['main']['pressure'];
    var VelVientoValue = result ['wind']['speed'];
    var ClimaValue = result ['weather']['0']['description'];
    var IconoValue = result ['weather']['0']['icon'];

    Nombre.innerHTML = NombreCiudad;
    TempMax.innerHTML = "Temperatura máxima: " + `${TempMaxValue}` + "°C.";
    TempMin.innerHTML = "Temperatura mínima: " + `${TempMinValue}` + "°C.";
    Humedad.innerHTML = "Humedad: " + `${HumedadValue}` + "Hr.";
    SenTerm.innerHTML = "Sensación térmica: " + `${SenTermValue}` + "°C.";
    PresAtmos.innerHTML = "Presión atmosférica: " + `${PresAtmosValue}` + "hPa.";
    VelViento.innerHTML = "Velocidad del viento: " + `${VelVientoValue}` + "m/s.";
    Clima.innerHTML = "Clima: " + `${ClimaValue}` + ".";
    Icono.setAttribute('src', "icons/"+`${IconoValue}`+".png");
    
    
    
   
}).catch(err =>{
    console.log('error pa!', err);
});
}



