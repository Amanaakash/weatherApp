import './App.css'
import MainInfo from './components/MainInfo'
import Highlights from './components/Highlights'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('kathmandu');
  const [data, setData] = useState({
    mainWeather:"cloudy",
    temperature: "15",
    windSpeed:"1200",
    humidity: " 1500",
    visibility: "1200",
    pressure: "12",
  });

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dd19b01c288b5a78e9968c721d2ff9a6&units=metric`);
      const fetchedData = response.data;
      setData(
        {...data,
          mainWeather:fetchedData.weather[0].main,
          temperature:fetchedData.main.temp,
          windSpeed:fetchedData.wind.speed,
          humidity:fetchedData.main.humidity,
          visibility:fetchedData.visibility,
          pressure:fetchedData.main.pressure,
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="body">
      <h1 className='heading'>Weather App</h1>
        <div className="container">
          <div className="searchSection">
            <div className='SearchBox'>
              <input type='text' onChange={handleChange} placeholder='Enter a city' />
              <button type='button' onClick={fetchData}>Search</button>
            </div>
            <MainInfo data={data} cityName={search} />
          </div>
          <Highlights data={data} />
        </div>
    </div>
  )
}

export default App
