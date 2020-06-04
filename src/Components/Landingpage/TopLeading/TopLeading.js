import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TopLeading.css";

const Topleading = () => {
  const [Country, setCountry] = useState();
  const fetchDataApi = async () => {
    const apiFetch = await axios
      .get("https://covid2019-api.herokuapp.com/v2/current")
      .then((resp) => {
        const test = resp.data.data;
        setCountry(test);
        console.log(resp.data.data);
      });
  };
  useEffect(() => {
    fetchDataApi(Country);
  }, []);
  const api = {
    country: "Zambia",
    infected: "232",
    death: "4",
  };
  return (
    <div className="toplead-container">
      <div className="toplead-item">
        {/* <h3>{Country}</h3>
				<p>
					<i>Infected {api.infected}</i>
				</p>
				<p>
					<i>Deaths {api.death}</i>
				</p> */}

        <ul className="toplead-ul">
          {Country
            ? Country.map((item) => (
                <li className="toplead-item" key={item.id}>
                  <h3>{item.location}</h3>
                  <p>Confirmed {item.confirmed}</p>
                  <p>Active {item.active}</p>
                  <p>Recovered {item.recovered}</p>
                  <p>Deaths {item.deaths}</p>
                </li>
              ))
            : "Please wait...."}
        </ul>
      </div>
    </div>
  );
};

export default Topleading;
