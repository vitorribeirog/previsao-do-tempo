
const key = "a141aa38682904283d0e5d9f22191caa"

// Função que armazena o nome da cidade
function getNameCity() {
    const cityName = document.getElementById("entry-city").value

    searchCity(cityName)
}

// Função que busca a cidade dentro do banco de dados 
async function searchCity(cityName) {

    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`)
            .then(response => response.json())

    insertInfoCity(response)
}

// Função que busca as informações desejadas e insere na tela as informações vindas do BD
function insertInfoCity(response) {

    const city = document.getElementById("city")
    const temp = document.getElementById("temp")
    const clouds = document.getElementById("clouds")
    const cloudImg = document.getElementById("img-icon")
    const humidity = document.getElementById("humidity")

    city.innerHTML = "Tempo em " + response.name
    temp.innerHTML = Math.floor(response.main.temp) + " °C"
    clouds.innerHTML = response.weather[0].description
    cloudImg.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`
    humidity.innerHTML = "Umidade " + response.main.humidity + "%"


}

