import React, { Component } from 'react';
import './TopLeading.css';

class Topleading extends Component {
  render() {
    const api = {
      country: 'Zambia',
      infected: '232',
      death: '4',
    };
    return (
      <div className='toplead-container'>
        <div className='toplead-item'>
          <h3>{api.country}</h3>
          <p>
            <i>Infected {api.infected}</i>
          </p>
          <p>
            <i>Deaths {api.death}</i>
          </p>
        </div>
      </div>
    );
  }
}

export default Topleading;
