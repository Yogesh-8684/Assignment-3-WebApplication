import React,{ useState }  from "react";
import "./about.css";
import  fetchWeather  from './api/fetchWeather';


function About() {



  const [checked, setChecked] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];


  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
      return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);

    
    const search = async (e) => {
      //that is calling via an await function the query that is passed
        if(e.key === 'Enter'){
          const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
        }
    }
    
    return (
<>
<div className="check">
      <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {`Items checked are: ${checkedItems}`}
      </div>
    </div>
 <div className="weatherCard">
      <div className='main-container1'>
    <input type='text' className='searchbar' placeholder='Enter your city Name' value={query}/** Direct State ge Query Send Madadhu*/ onChange={(e)=> setQuery(e.target.value)} onKeyPress={search}></input>
    {weather.main && (
      <div className="city">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp">
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].desccription}>
        </img>
        <p>{weather.weather[0].description}</p>
        </div>
      </div>
    )}
   
    </div>
    </div>

    </div>
    </>
 )
}

export default About;
