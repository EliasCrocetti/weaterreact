import axios from 'axios'
import { useState } from 'react';
import Cards from '../../components/cards/Cards';
// hook para obtener las traducciones
import { useTranslation } from 'react-i18next';


const Api = () => {
  const [t, i18n] = useTranslation("global");

  const serverUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=80b87b83ae959423ee689b48bf409a39&lang='+i18n.language+'&q=';
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [respuestaApi, setRespuestaApi] = useState([]);

  const getWeather = async () => {
    setLoading(true);

    if (city !== "") {

      const responseApi = await axios.get(serverUrl + city)

      if (responseApi)
        setLoading(false);
        setRespuestaApi(responseApi.data);
        console.log(responseApi, 'responseApi', loading)
    }

    setLoading(false);
  }

  const handleChange = (event) => {
    console.log("probando", event.target.value)
    setCity(event.target.value);
  }

  return (
    <div style={{ "width": "100%" }}>
      <input className="placeholder-wave ajustarInput" placeholder="Ingrese Ciudad..." onChange={handleChange} onBlur={handleChange} />
      <button type="button" className="btn btn-primary" onClick={getWeather}>

        {loading ? (
          <div>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>

        ) : (
          <span>
            {t("getWeather.getWeather")}
          </span>
        )}
      </button>


      <Cards
        setRespuestaApi={respuestaApi}
      ></Cards>
    </div>
  );
}

export default Api;
