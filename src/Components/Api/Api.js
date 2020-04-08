import React from "react";

const Api = () => {
  let state = {
    data: false

  }


  let url = "https://covid2019-api.herokuapp.com/v2/total"
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/jeson',
      'Content-TYpe': 'application/jeson'
    }
  }).then((result) => {
    result.json()
      .then((resp) => {
        console.log(resp);

      })
  })

  return <h2 > Hi < /h2>
}

export default Api;
