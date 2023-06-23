import React from 'react'
import './Highlights.css'
import windLogo from '../assets/windLogo.png'
import humidLogo from '../assets/39.png'
import visLogo from '../assets/vis.png'
import presLogo from '../assets/air.png'

const Highlights = ({data}) => {

  return (
    <div className="highlightsSection">
          <h1 className='highlightText'>Today's Hightlights</h1>
          <div className="highlightsContainer">
            <div className="windspeed">
              <h2>Wind Speed</h2>
              <img src={windLogo} className='windLogo' alt="windLogo" />
              <h3>{data.windSpeed}</h3>
            </div>
            <div className="humidity">
              <h2>Humidity</h2>
              <img src={humidLogo} className='humidLogo' alt='humidLogo'/>
              <h3>{data.humidity}</h3>
            </div>
            <div className="visibility">
              <h2>Visibility</h2>
              <img src={visLogo}  className='visLogo' alt="visLogo" />
              <h3>{data.visibility}</h3>
            </div>
            <div className="pressure">
              <h2>Pressure</h2>
              <img src={presLogo} className='presLogo' alt="pressureLogo" /> 
              <h3>{data.pressure}</h3>
            </div>
          </div>
        </div>
  )
}

export default Highlights
