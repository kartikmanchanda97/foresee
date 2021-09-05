import { useState, useEffect } from 'react';
import './infoContainer.css';

import Slider from './carousel';

import axios from 'axios';

export default function InfoContainer({city}) {
  const [tem, setTemp] = useState();

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(({data}) => setTemp(data))
    .catch(err => console.log(err));
  }, [city]);

  const d = new Date();

	return(
     <>
      <div className="right" >
        
        <h2 className="font-weight-bold pl-5 py-4" >Today</h2>

        <div className="infoContainer p-4" >
          <h2>
            <span className="font-weight-bold h1" >{String(Math.round(tem?.main?.temp - 273))}° C</span>
            <br />
            <span>{tem?.weather[0]?.main}</span>
            <br />
            <span className="h6" >
              {d.toLocaleString('default', {weekday: 'long'})} {d.getDate()}, {d.toLocaleString('default', {month: 'long'})}  {d.getFullYear()}
            </span>
          </h2>

          <p className="verticalLine mr-3 ml-3" ></p>

          <div className="info" >
            <p>Humidity: {tem?.main?.humidity}</p>
            <p>Pressure: {tem?.main?.pressure}</p>
            <p>Max: {Math.round(tem?.main?.temp_max - 273)}° C</p>
            <p>Min: {Math.round(tem?.main?.temp_min) - 273}° C</p>
          </div>

        </div>


        <h2 className="font-weight-bold pl-5 mt-5" >Daily</h2>

        <Slider city={city} />

      </div>
     </>
	)
}