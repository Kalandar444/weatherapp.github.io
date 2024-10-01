let valueSearch=document.getElementById('valueSearch');
let city=document.getElementById('city');
let temperature=document.getElementById('temperature');
let description=document.querySelector('.description');
let clouds=document.getElementById('clouds');
let humidity=document.getElementById('humidity');
let pressure=document.getElementById('pressure');
let form=document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(valueSearch.value !=''){
        searchWeather();
    }

});

let id=`d91b829d50f7b5277c976dc07289c27e`
const searchWeather = () => {
    fetch(url+'&q='+ valueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.cod == 200){
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('span').innerText = data.main.temp;
                description.innerText = data.weather[0].description;

                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            }else{
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        })
}
// search Default
const initApp = () => {
    valueSearch.value = 'Washington';
    searchWeather();
}
initApp();