import { useState } from "react";
import Axios from "axios";
import "./App.css";

import { TiWeatherCloudy } from 'react-icons/ti';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const searchPressed = async () => {
    const result = await Axios.get(
      `${api.base}weather?q=${search}&appid=${api.key}`
    );
    setData(result.data);
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <span className="circle"></span>
          <h1>Weather</h1>
            <TiWeatherCloudy size={'4em'} />
          <div>
            <input
              type="text"
              className="txt_search"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <button  className='btn_search' onClick={searchPressed}>Search</button>
          </div>

          {/* Location */}
          {data && (
            <div>
              <p>
                {data.name} - {data.sys.country}
              </p>
              <div>
                <p>{data.main.temp} C</p>
              </div>
              <div>
                <p>{data.weather[0].main}</p>
                <p>({data.weather[0].description})</p>
              </div>
            </div>
          )}
          <div></div>
        </div>
      </header>
    </div>
  );
}

export default App;
