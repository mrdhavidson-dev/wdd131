// Static values (match the weather shown in the page, units: °C and km/h)
const temperature = parseFloat(document.querySelector("#temp").textContent);
const windSpeed = parseFloat(document.querySelector("#wind").textContent);

// Metric wind chill formula (Environment Canada), one-line return
const calculateWindChill = (temp, speed) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
}
document.querySelector("#windchill").textContent = windChill;

// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;