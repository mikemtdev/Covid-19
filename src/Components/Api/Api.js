import React, { Component, Fragment } from "react";
import Axios from "axios"

class Api extends Component {

  render() {


      const apiData  = Axios.get('https://covid2019-api.herokuapp.com/v2/total')
        .then(apiCovid => {
          console.log(apiCovid);
        })




    return (
      <Fragment>
        <p> Api {}</p>

      </Fragment>
    )
  }
}

export default Api;
