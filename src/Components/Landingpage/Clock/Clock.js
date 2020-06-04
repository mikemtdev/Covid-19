import React, { useState, useEffect } from "react";
import "./Clock.css";
import axios from "axios";
const Clock = () => {
  const [Confirmed, setConfirmed] = useState(null);
  const [Active, setActive] = useState(null);
  const [Deaths, setDeaths] = useState(null);
  const [UpDate, setUpDate] = useState(null);
  const [Recovered, setRecovered] = useState(null);

  const fetchDataApi = async () => {
    const apiFetchComfirmed = await axios
      .get("https://covid2019-api.herokuapp.com/v2/total")
      .then((resp) => {
        const confirmedCases = resp.data.data.confirmed;
        setConfirmed(confirmedCases);

        const lastUpdateDate = resp.data.dt;
        setUpDate(lastUpdateDate);

        const activeCases = resp.data.data.active;
        setActive(activeCases);

        const recoveredCases = resp.data.data.recovered;
        setRecovered(recoveredCases);

        const DeathCases = resp.data.data.deaths;
        setDeaths(DeathCases);
      })
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    fetchDataApi(Confirmed, Active, Recovered, Deaths, UpDate);
  }, []);
  const [Country, setCountry] = useState();
  const onChangeHandler = (e) => {
    const evalue = e.target.value;

    const url = `https://covid2019-api.herokuapp.com/v2/country/${evalue}`;
    const countryApiFetch = axios.get(url).then((resp) => {
      const apiData = resp.json();
      setCountry(apiData);
      console.log(apiData);
    });
  };
  //   const { location, confirmed, deaths, recovered, active } = Country;
  const location = "";
  const confirmed = "";
  const deaths = "";
  const recovered = "";
  const active = "";

  console.log(Country);
  const onClickHandler = (e) => {};
  return (
    <div className="clockmain-Container">
      <div className="clock-container">
        <h1 className="clock-h1">
          {Confirmed ? `Comfirmed${Confirmed}` : "Please wait...."}
        </h1>
        <h3 className="clock-h1">
          {Active ? `Infected ${Active}` : "Please wait...."}
        </h3>
        <h3 className="clock-h1">
          {Recovered ? `Recovered ${Recovered}` : "Please wait...."}
        </h3>
        <h3 className="clock-h1">
          {Deaths ? `Deaths ${Deaths}` : "Please wait...."}
        </h3>

        <p className="clock-h1">
          <h3>Last Update date</h3> {UpDate ? UpDate : "Please wait...."}
        </p>
        {/* <div className="search-container">
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Search by Country"
          />
          <button type="button" onClick={onClickHandler}>
            Search
          </button>
        </div> */}
        {/* <div className="searched-country clock-h1 toplead-item">
          <h3>{location}</h3>
          <p>Confirmed {confirmed}</p>
          <p>Active {active}</p>
          <p>Recovered {recovered}</p>
          <p>Deaths {deaths}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Clock;
