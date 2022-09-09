import { useState } from "react";
import { useTranslation } from 'react-i18next';

import cieloclaro from "../../assets/imgs/cieloclaro.png"

const Cards = ({ setRespuestaApi }) => {
  const [t, i18n] = useTranslation("global");


  const [showData, setshowData] = useState(false)
  if (setRespuestaApi.weather != undefined) {

    console.log(setRespuestaApi.weather[0], 'Cards')

  }
  return (
    <div className="mt-5">
      <div className="container">
        <div className="card mb-3 mx-auto bg-dark text-light">
          {setRespuestaApi.name}
          {
            setRespuestaApi.weather !== undefined ? (
              <div >
                {t("weatherToday.todayis")}
                {
                  setRespuestaApi.weather.map((data) => {

                    return data.main.includes("Clear") ? (
                      <div>
                        <span>{data.description}</span><br/>
                        <img src={cieloclaro} width={"25%"} height={"25%"} />
                      </div>
                    ) : (
                      <h1 >h1 {data.description}</h1>
                    );
                  })
                }
              </div>
            ) : (
              <span>
                No hay datos
              </span>
            )
          }
        </div>
      </div>
    </div>
  );
}


export default Cards;
