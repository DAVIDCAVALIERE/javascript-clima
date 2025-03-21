const apiKey = "TU API KEY";
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let kelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data))
    .catch((error) => console.error("Error:", error));
}

function mostrarDatosClima(data) {
//   console.log(data);
  const datosClima = document.getElementById("datosClima");
  datosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${(temperatura - kelvin).toFixed(2)}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es: ${humedad}%`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  datosClima.appendChild(ciudadTitulo);
  datosClima.appendChild(temperaturaInfo);
  datosClima.appendChild(humedadInfo);
  datosClima.appendChild(descripcionInfo);
  datosClima.appendChild(iconoInfo);
}
