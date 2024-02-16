import axios from 'axios';
import './App.css';
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})     // to manipulate state on DOM

  const apiKey = '5df0a23a1c431334ef36e07cf8095f7c'


  const getData = () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=" + apiKey
    axios.get(apiUrl)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => { console.log(err); })

    setInputCity("");
  }

  const getInputCity = (e) => {
    setInputCity(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <>
      <div className='main'>
        <div className='header'>
          <p id='title'>Weather App</p>
          <div className='form'>
            <input id='inputId'
              type='text'
              value={inputCity}
              onChange={getInputCity}
              placeholder='Enter your City Name' />

            <button type='button' onClick={getData}>Search</button>
          </div>
        </div>
        {Object.keys(data).length > 0 &&
          <div className='card'>
            <div className='card-data'>
              <img id='icon' src="./src/assets/weather-icon.png" />
              <h5 className='weatherCity font-col'>{data.name}</h5>
              <h6 className='weatherTemp font-col'>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
              <h6 className='humidity font-col'>Humidity : {data?.main?.humidity}%</h6>
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default App
