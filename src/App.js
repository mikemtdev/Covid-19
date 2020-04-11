import React from 'react';


import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Clock from './Components/Landingpage/Clock/Clock';
import Topleading from './Components/Landingpage/TopLeading/TopLeading';
import Infolinks from './Components/Landingpage/InfoLinks/Infolinks';
import Api from "./Components/Api/Api";

import './App.css';

function App() {
  return ( <
    div className = "App" >
    <Api />
    <
    Header / >
    <
    Clock / >
    <
    Topleading / >
    <
    Infolinks / >
    <
    Footer / >

    <
    /div>
  );
}

export default App;
