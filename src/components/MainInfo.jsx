import './MainInfo.css'
import { useState, useEffect } from 'react';
import CLEAR_DAY from '../assets/CLEAR_DAY.png'
import CLOUDY from '../assets/CLOUDY.png'
import FOG from '../assets/FOG.png'
import RAIN from '../assets/RAIN.png'
import SLEET from '../assets/SLEET.png'
import SNOW from '../assets/SNOW.png'
import TORNADO from '../assets/TORNADO.png'
import WIND from '../assets/WIND.png'

const MainInfo = ({data, cityName}) => {

  const main = data.mainWeather;
  const [icon, setIcon] = useState(null)
useEffect( 
  () => {
    switch (main) {
      case "Haze":
        setIcon(CLEAR_DAY);
        break;
      case "Clouds":
        setIcon(CLOUDY);
        break;
      case "Rain":
        setIcon(RAIN);
        break;
      case "Snow":
        setIcon(SNOW);
        break;
      case "Dust":
        setIcon(WIND);
        break;
      case "Drizzle":
        setIcon(SLEET);
        break;
      case "Fog":
        setIcon(FOG);
        break;
      case "Smoke":
        setIcon(FOG);
        break;
      case "Tornado":
        setIcon(TORNADO);
        break;
      default:
        setIcon(CLEAR_DAY);
    } }, [main])

    console.log(icon)

  return (
    <div className='MainInfo_container'>
      <div className="logoContainer">
        <img src={icon} alt="weather Logo" />
        <h3>{data.mainWeather}</h3>
      </div>
      
      <div className="tempContainer">
        <h1>{data.temperature}°C</h1>
        <h3>{cityName}</h3>
      </div>
    </div>
  )
}

export default MainInfo
