import React from 'react';


import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Clock from './Components/Landingpage/Clock/Clock';
import Topleading from './Components/Landingpage/TopLeading/TopLeading';
import Infolinks from './Components/Landingpage/InfoLinks/Infolinks';
import Api from "./Components/Api/Api";

import './App.css';

function App() {
    return (
        <div className="App" >
            <div className="Header-Comp" >
                <Header />
            </div>
            <div className="Clock-Comp" >
                <Clock />
            </div>
            <div className="Topleading-Comp" >
                <Topleading />
            </div>
            <div className="Infor-Comp" >
                <Infolinks /></div>
            <div className="Footer-Comp">
                <Footer />
            </div>

        </div>
  );
}

export default App;
