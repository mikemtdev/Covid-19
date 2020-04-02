import React from 'react';

import Header  from './Components/Shared/Header/Header'
import Clock from './Components/Landingpage/Clock/Clock';
import Topleading from './Components/Landingpage/TopLeading/TopLeading';
import Footer from './Components/Shared/Footer/Footer';
import Infolinks from './Components/Landingpage/InfoLinks/Infolinks'


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Clock />
      <Topleading />
      <Infolinks />
      <Footer />
    </div>
  );
}

export default App;
