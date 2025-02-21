let api_key = "fa1512ee0096bed17e17c8b7c4f26626";
let TemperaturaKelvin = 273.15;
let urlBase = "https://api.openweathermap.org/data/2.5/weather";





//AGREGAMOS UN EVENTO PARA ESCUCHAR LOS EVENTOS EN EL BOTON DE BUSCAR Y TOMAR EL NOMBRE DE LA CIUDA INGRESADA
document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
})



function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then(data => mostrarDatosClima(data))
}

    function mostrarDatosClima (data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    //creamos los elementos
    const ciudadTitulo = document.createElement('h1')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-TemperaturaKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${Math.floor(humedad)}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`


    //meter los elementos en el div
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
}