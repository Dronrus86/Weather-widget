const sitie = document.querySelector('.sitie');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const weatherImg = document.querySelector('.weather_img');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const API_CITIES = 'Saint Petersburg';
const API_KEY = '78aed49942b264a88006f17cac81d445';
const URL_API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${API_CITIES}&appid=${API_KEY}`;

spb();
search.addEventListener('input', () => {
    if (search.value === '') {
        spb();
    } else {
        siti();
    }
});


function spb() {
    fetch(URL_API_WEATHER)
        .then(res => res.json())
        .then(data => {
            sitie.innerHTML = data.name;
            temperature.innerHTML = (data.main.temp - 273).toFixed(0) + ' &#8451;';
            wind.innerHTML = data.wind.speed + ' м/с'
            weatherImg.innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`

        });

}


function siti() {
    btn.addEventListener('click', () => {
        const API_CITIES = `${search.value}`;
        const URL_API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${API_CITIES}&appid=${API_KEY}`
        fetch(URL_API_WEATHER)
            .then(res => res.json())
            .then(data => {
                sitie.innerHTML = data.name;
                temperature.innerHTML = (data.main.temp - 273).toFixed(0) + ' &#8451;';
                wind.innerHTML = (data.wind.speed).toFixed(0) + ' м/с'
            });


    });

}

const sitieTime = document.querySelector('.sitie_time');
const sitieDate = document.querySelector('.sitie_date');

function date() {
    let date = new Date();
    sitieDate.innerHTML = date.toDateString();
    sitieTime.innerHTML = date.toLocaleTimeString().slice(0, -3);

}

setInterval(date, 1000);