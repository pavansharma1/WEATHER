
const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-btn');
const locationElement = document.querySelector('.city');
const temperatureElement = document.querySelector('.temperature');
const weatherElement = document.querySelector('.weather');
const date =document.querySelector('.date');
date.innerHTML=Date().toString();
const weatherElement1 = document.querySelector('.humidity');
const weatherElement2 = document.querySelector('.feels');
const weatherElement3 = document.querySelector('.pressure');
const weatherElement4 = document.querySelector('.wind');



const apiKey = '98740f4ebc0d63bc0f8ba70090e5a091';
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value;
    let temp = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`);

    temp.then((response) => response.json())
        .then((data) => {
            console.log(data)
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp}°C`;
            weatherElement.textContent = data.weather[0].main;
            weatherElement1.textContent = `Humidity:${data.main.humidity}%`;
            weatherElement2.textContent = `Feels like:${data.main.feels_like}°C`;
            weatherElement3.textContent = `visibility:${data.visibility}%`
            weatherElement4.textContent = `wind:${data.wind.speed}m/s`
            let img= document.getElementById('img');
            img.style='visibility:display';
             

          if(data.weather[0].main == 'Clouds')
                {
                    let img = document.getElementById('img')
                    img.src = "cloud.png"
  
                    
                }

           else if (data.weather[0].main == 'Smoke')
            {
                let img = document.getElementById('img')
                img.src = "cloud.png"
            }
            else if (data.weather[0].main == 'Haze')
                {
                    let img = document.getElementById('img')
                    img.src = "haze.png"
                }
            else if (data.weather[0].main == 'Mist') 
                    {
                        let img = document.getElementById('img')
                        img.src = "mist.png"
                    }
            else if (data.weather[0].main == 'Dust')
                        {
                            let img = document.getElementById('img')
                           img.src = "dust.png"
                        }
            else if (data.weather[0].main == 'Fog')
                            {
                                let img = document.getElementById('img')
                               img.src = "fog.png"
                            }
            else if (data.weather[0].main == 'Sand')
                                {
                                    let img = document.getElementById('img')
                                  img.src = "sand.png"
                                }
            else if (data.weather[0].main == 'Ash')
                                    {
                                        let img = document.getElementById('img')
                                       img.src = ".png"
                                    }
            else if (data.weather[0].main == 'Tornado')
                                        {
                                            let img = document.getElementById('img')
                                            img.src = "tornado.png"
                                        }
            else if (data.weather[0].main == 'Clear')
                                            {
                                                let img = document.getElementById('img')
                                                img.src = "clear.png"
                                            }
            else if (data.weather[0].main== 'Rain')
                                                {
                                                    let img = document.getElementById('img')
                                                  eimg.src = "rain.png"
                                                }             })


        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('City Does Not Exist');
        });        

});


