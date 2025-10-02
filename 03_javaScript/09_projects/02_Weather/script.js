document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById('city-input')
    const getWeatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDispaly = document.getElementById('city-name')
    const tempDisplay = document.getElementById('temperature')
    const windDisplay = document.getElementById('wind')
    const desciptionDisplay = document.getElementById('description')
    const errorMessage = document.getElementById('error-message')
    // const API_KEY = ;
    // link  : http://goweather.xyz/weather/{city}
    

    getWeatherBtn.addEventListener('click',async()=>{
        const city = cityInput.value.trim()
        if(!city) return;
        // it may throw an error
        // server is always in another continent

        try {
            const weatherData= await fetchWeathData(city);
            displayWeatherData(city,weatherData);
        } catch (error) {
            showError();
            
        }



    })

    async function fetchWeathData(city){
        // gets the data
        const url = `http://goweather.xyz/weather/${city}`
        const response = await fetch(url) //wait till we get respose
        console.log(typeof response);
        console.log(response);

        if(!response.ok){
            throw new error ("city not found")
        }
        const data = await response.json()
        return data;

    }

    function displayWeatherData(city,data){
        // display data
        console.log(data);
        const {temperature,description,wind} = data;
        const cityName = city;
        cityNameDispaly.textContent =`${cityName}`;
        tempDisplay.textContent =`temperature: ${temperature}`;
        desciptionDisplay.textContent =`Weather: ${description}`;
        windDisplay.textContent =`wind speed: ${wind}`;

        // unlocking the display
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        

    }

    function showError(){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }
})