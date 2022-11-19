import axios from 'axios';
//first step like all those apis i save the key and URl
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key ='c412e32f8374f6a87ce341d095a159f6';


const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric', //these are the supported in the APi  
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;